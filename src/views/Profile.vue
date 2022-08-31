<template>
    <div class="nav-container mb-3">
        <nav class="navbar navbar-expand-md navbar-light bg-light" style="width: 100%; height: 65px; top: 0px; position: fixed; display: block">
        <div class="container" >
            <div class="navbar-brand logo"></div>
            <div>
            <div v-if="save_warn" class="alert alert-warning alert-dismissible fade show" style="padding-top: 0px, padding-bottom: 1px" role="alert">
                <strong>Attenzione!</strong> Non è stato possibilie aggiornare le disponibilità.
            </div>

            <div v-if="save_ok" class="alert alert-success alert-dismissible fade show" style="padding-top: 0px, padding-bottom: 1px" role="alert">
                <strong>Grazie!</strong> Le disponibilità sono state aggiornate.
            </div>

            <button type="button" class="btn btn-primary navbar-brand" v-if="!save_ok && !save_warn" style="padding-top: 1px; color: white" @click="update()">Save</button>
            </div>
        </div>
        </nav>
    </div>
    <div class="d-flex justify-content-center">
        <div class="row" style="max-width: 95%">
            <div class="d-flex">
                <button type="button" v-if="typeof nonemptyweeks['' + weekboundaries[weekindex - 1]] !== 'undefined'" class="btn btn-light" @click="week = weekboundaries[--weekindex]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
                    </svg>
                </button>
                <div class="overflow-auto">
                    <table class="table table-striped table-bordered" style="margin-top: 25px;" v-if="!isMobile() && nonemptyweeks['' + week]">
                        <thead>
                        <th></th>
                        <template v-for="[index, turno] of Object.entries(header(turni))" :key="turno" style="text-align: center">
                            <th v-if="parseInt('' + turno.weekyear) === parseInt('' + week)"> {{ index }}</th>
                        </template>
                        </thead>
                        <tbody>
                        <tr v-for="turno of piv" :key="turno.id">
                            <template v-for="value in turno" :key="value">
                                <td v-if="parseInt('' + value.weekyear) === parseInt('' + week)" :style="user.name == value.id ? 'text-align: center; background-color:  #f7dc6f' : 'text-align: center;'">
                                    <div v-if="typeof value.checked === 'undefined'" style="text-align: left;"> {{ value.id }} </div>
                                    <button type="button" class="btn"
                                        v-bind:class="{
                                            'btn-danger': value.checked === 'false' || value.checked === false,
                                            'btn-success': value.checked === 'true' || value.checked === true,
                                        }"
                                        v-if="typeof value.checked !== 'undefined'"
                                        :disabled="user.name !== value.id"
                                        @click="
                                            value.modified = true;
                                            value.checked = toggle(value.checked);
                                        ">
                                        {{ (value.checked === "true" || value.checked === true) ? "✓" : "-" }}
                                    </button>
                                </td>
                            </template>
                        </tr>
                        </tbody>
                    </table>

                    <table class="table table-striped table-bordered" style="margin-top: 25px" v-if="isMobile() && nonemptyweeks['' + week]">
                        <thead>
                            <th>{{user.name}}</th><th>Disponibilità</th>
                        </thead>
                        <tbody>
                            <tr v-for="value of piv['---' + user.name + ' ' + week]" :key="value.id">
                                <td v-if="value.slotdate">{{ date2string(value) }} </td>
                                <td v-if="value.slotdate" style="text-align: center">
                                    <button type="button" class="btn"
                                        v-bind:class="{
                                            'btn-danger': value.checked === 'false' || value.checked === false,
                                            'btn-success': value.checked === 'true' || value.checked === true,
                                        }"
                                        v-if="typeof value.checked !== 'undefined'"
                                        :disabled="user.name !== value.id"
                                        @click="
                                            value.modified = true;
                                            value.checked = toggle(value.checked);
                                        ">
                                        {{ (value.checked === "true" || value.checked === true) ? "✓" : "-" }}
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button type="button" v-if="typeof nonemptyweeks['' + weekboundaries[weekindex + 1]] !== 'undefined'" class="btn btn-light" @click="week = weekboundaries[++weekindex]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <div class="d-flex justify-content-center">
        <div class="spinner-border" v-if="loading" style="left: 50%; top: 50%; display: block; position: absolute;" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>

</template>

<script>
import {useAuth0} from "@auth0/auth0-vue";
import moment from "moment";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default {
    modified: false,
    name: "profile",
    setup() {
        const auth0 = useAuth0();
        return {
            user: auth0.user,
        };
    },
    methods: {
        isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        },
        pivot(turni) {
            let dict = {};
            const user = this.user;
            const nonemptyweeks = this.nonemptyweeks;
            const weekboundaries = this.weekboundaries;
            turni.forEach(function (turno) {
                const key = (turno.id === user.name? "---" : "") + turno.id + " " + turno.weekyear;
                dict[key] = (dict[key] ? dict[key] : [{id: turno.id, weekyear: turno.weekyear}]).concat([{
                    slotdate: turno.slotdate,
                    slotbin: turno.slotbin,
                    slotwhere: turno.slotwhere,
                    checked: turno.checked,
                    weekyear: turno.weekyear,
                    weekday: turno.weekday,
                    token: turno.token,
                    modified: false,
                    id: turno.id,
                },
                ]);
                nonemptyweeks['' + turno.weekyear] = 1;
                if (!weekboundaries.includes(turno.weekyear)) {
                    weekboundaries.push(turno.weekyear);
                }
            });
            this.weekindex = weekboundaries.indexOf(this.week)
            return Object.keys(dict).sort().reduce(
                (obj, key) => {
                    obj[key] = dict[key];
                    return obj;
                },
                {}
            );
        },
        update(then) {
            let res = [];
            for (let row in this.piv) {
                for (let col in this.piv[row]) {
                    let el = this.piv[row][col];
                    if (el.modified) {
                        res.push({
                            id: el["id"],
                            slotdate: el["slotdate"],
                            slotbin: el["slotbin"],
                            slotwhere: el["slotwhere"],
                            checked: el["checked"],
                            token: el["token"],
                        });
                    }
                }
            }
            let s = JSON.stringify(res).replaceAll("@", "%40").replaceAll("[", "%5B").replaceAll("]", "%5D").replaceAll("{", "%7B").replaceAll("}", "%7D")
            this.loading = true
            axios
                .post(process.env.VUE_APP_BE + "&token=" + this.token + "&cmd=update&turni=" + s)
                .then((response) => {
                    if (then) then();
                    this.save_ok = true;
                    this.loading = false;
                    setTimeout(() => {
                        this.save_ok = false
                        this.save_warn = false

                    }, 2500);
                })
                .catch((error) => {
                    this.save_warn = true;
                    setTimeout(() => {
                        this.save_ok = false
                        this.save_warn = false
                    }, 2500);
                });
        },
        toggle(value) {
            if (value === true || value === "true") {
                return false;
            } else {
                return true;
            }
        },
        addUser(then) {
            this.loading = true
            axios
                .post(process.env.VUE_APP_BE + "&token=" + this.token + "&cmd=adduser&id=" + this.user.name + "&firstname=foo" + "&lastname=bar")
                .then((response) => {
                    if (then) then();
                    this.loading = false
                });
        },
        getTurni() {
            this.loading = true
            axios
                .get(process.env.VUE_APP_BE + "&token=" + this.token)
                .then((response) => {
                    this.turni = response["data"];
                    this.piv = this.pivot(this.turni);
                    this.loading = false
                });
        },
        day2string(weekday) {
            switch(weekday) { 
                case 2: { 
                    return "Lun"
                    break; 
                } 
                case 3: { 
                    return "Mar"
                    break; 
                } 
                case 4: { 
                    return "Mer"
                    break; 
                } 
                case 5: { 
                    return "Gio"
                    break; 
                }
                case 6: { 
                    return "Ven"
                    break; 
                } 
                case 7: { 
                    return "Sab"
                    break; 
                } 
                case 1: { 
                    return "Dom"
                    break; 
                } 
            } 
            return turno.slotdate + " " + turno.weekday + " " + turno.slotwhere + " " + turno.slotbin
        },
        date2string(turno) {
            return turno.slotdate + " " + this.day2string(turno.weekday) + " " + turno.slotwhere + " " + turno.slotbin
        },
        header(turni) {
            let dict = {};
            const date2string = this.date2string
            turni.forEach(function (turno) {
                dict[date2string(turno)] = {
                    weekyear: turno.weekyear,
                };
            });
            return dict;
        },
    },
    data() {
        return {
            token: this.$route.query.token,
            loading: false,
            save_warn: false,
            save_ok: false,
            weekboundaries: [],
            nonemptyweeks: {},
            popupattivo: false,
            weekindex: -1,
            weeknow: moment().week(),
            week: moment().week(),
            turni: [],
            piv: [],
        };
    },
    mounted() {
        this.addUser(this.getTurni);
    },
};
</script>

