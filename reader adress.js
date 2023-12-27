import { Mongo } from 'meteor/mongo';
import { Transactions } from '/imports/api/transactions/transactions.js';
import { string } from 'prop-types';

Meteor.methods({
    'coinStats.getCoinStats': function(){
        this.unblock();
        let transactionsHandle, transactions, transactionsExist;
        let loading = true;
        let coinId = Meteor.settings.public.coingeckoId;
        if (coinId){
            try{
                let now = new Date();
                now.setMinutes(0); 

                if (Meteor.isClient){
                    transactionsHandle = Meteor.subscribe('transactions.validator', props.validator, props.delegator, props.limit);
                    loading = !transactionsHandle.ready();
                }}}}}
