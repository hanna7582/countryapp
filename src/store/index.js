import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../Constant';
import _ from 'lodash';

Vue.use(Vuex);

const store = new Vuex.Store({
    //상태
    state: {
        currentRegion: 'all',
        countries: [
            { no: 1, name: '미국', capital: '워싱턴DC', region: 'america' },
            { no: 2, name: '프랑스', capital: '파리', region: 'europe' },
            { no: 3, name: '영국', capital: '런던', region: 'europe' },
            { no: 4, name: '중국', capital: '베이징', region: 'asia' },
            { no: 5, name: '태국', capital: '방콕', region: 'asia' },
            { no: 6, name: '모로코', capital: '라바트', region: 'africa' },
            { no: 7, name: '라오스', capital: '비엔티안', region: 'asia' },
            { no: 8, name: '베트남', capital: '하노이', region: 'asia' },
            { no: 9, name: '피지', capital: '수바', region: 'oceania' },
            { no: 10, name: '솔로몬 제도', capital: '호니아라', region: 'oceania' },
            { no: 11, name: '자메이카', capital: '킹스턴', region: 'america' },
            { no: 12, name: '나미비아', capital: '빈트후크', region: 'africa' },
            { no: 13, name: '동티모르', capital: '딜리', region: 'asia' },
            { no: 14, name: '멕시코', capital: '멕시코시티', region: 'america' },
            { no: 15, name: '베네수엘라', capital: '카라카스', region: 'america' },
            { no: 16, name: '서사모아', capital: '아피아', region: 'oceania' }
        ]
    },
    getters: {
        //지역별 국가정보
        countriesByRegion(state) {
            if (state.currentRegion == 'all') {
                return state.countries;
            } else {
                //america이면 america인 것만 필터링하여 리턴
                // return state.countries.filter(c => c.region == state.currentRegion);
                return _.filter(state.countries, c => c.region == state.currentRegion);
            }
        },
        //지역 리스트
        regions(state) {
            //지역명을 배열로 반환
            var temp = _.map(state.countries, 'region');
            // var temp = state.countries.map(c => c.region);
            //배열의 중복 제거
            temp = _.uniq(temp);
            //배열의 앞에 all추가
            temp.splice(0, 0, 'all');
            return temp;
        },
        //현재 지역명
        currentRegion(state) {
            return state.currentRegion;
        }
    },
    //변이
    mutations: {
        [Constant.CHANGE_REGION]: (state, playload) => {
            state.currentRegion = playload.changeRegion;
        }
    },

})

export default store;