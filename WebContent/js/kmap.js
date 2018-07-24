
var myChart = echarts.init(document.getElementById('kmap'));

var rawData = [['2017/12/31','3570.47','3539.18','-33.69','-0.94%','3538.35','3580.6','176963664','25403106','-'],['2017/12/30','3566.73','3572.88','9.14','0.26%','3538.11','3573.68','187889600','26778766','-'],['2017/12/29','3528.4','3563.74','29.96','0.85%','3515.52','3564.17','182551920','25093890','-'],['2017/12/28','3635.77','3533.78','-94.13','-2.59%','3533.78','3641.59','269983264','36904280','-'],['2017/12/25','3614.05','3627.91','15.43','0.43%','3601.74','3635.26','198451120','27466004','-'],['2017/12/24','3631.31','3612.49','-23.6','-0.65%','3572.28','3640.22','227785216','31542126','-'],['2017/12/23','3653.28','3636.09','-15.68','-0.43%','3633.03','3684.57','298201792','41990292','-'],['2017/12/22','3645.99','3651.77','9.3','0.26%','3616.87','3652.63','261178752','36084604','-'],['2017/12/21','3568.58','3642.47','63.51','1.77%','3565.75','3651.06','299849280','39831696','-'],['2017/12/18','3574.94','3578.96','-1.03','-0.03%','3568.16','3614.7','273707904','36538580','-'],['2017/12/17','3533.63','3580','63.81','1.81%','3533.63','3583.41','283856480','38143960','-'],['2017/12/16','3522.09','3516.19','5.83','0.17%','3506.29','3538.69','193482304','26528864','-'],['2017/12/15','3518.13','3510.35','-10.31','-0.29%','3496.85','3529.96','200471344','27627494','-'],['2017/12/14','3403.51','3520.67','86.09','2.51%','3399.28','3521.78','215374624','27921354','-'],['2017/12/11','3441.6','3434.58','-20.91','-0.61%','3410.92','3455.55','182908880','24507642','-'],['2017/12/10','3469.81','3455.5','-16.94','-0.49%','3446.27','3503.65','200427520','27949970','-'],['2017/12/9','3462.58','3472.44','2.37','0.07%','3454.88','3495.7','195698848','26785488','-'],['2017/12/8','3518.65','3470.07','-66.86','-1.89%','3466.79','3518.65','224367312','29782174','-'],['2017/12/7','3529.81','3536.93','11.94','0.34%','3506.62','3543.95','208302576','28056158','-'],['2017/12/4','3558.15','3524.99','-59.83','-1.67%','3510.41','3568.97','251736416','31976682','-'],['2017/12/3','3525.73','3584.82','47.92','1.35%','3517.23','3591.73','281111232','33885908','-'],['2017/12/2','3450.28','3536.91','80.6','2.33%','3427.66','3538.85','301491488','36918304','-'],['2017/12/1','3442.44','3456.31','10.9','0.32%','3417.54','3483.41','252390752','33025674','-'],['2017/11/30','3433.85','3445.4','9.1','0.26%','3327.81','3470.37','304197888','38750364','-'],['2017/11/27','3616.54','3436.3','-199.25','-5.48%','3412.43','3621.9','354287520','46431124','-'],['2017/11/26','3659.57','3635.55','-12.38','-0.34%','3629.86','3668.38','306761600','42624744','-'],['2017/11/25','3614.07','3647.93','31.82','0.88%','3607.52','3648.37','273024864','38080292','-'],['2017/11/24','3602.89','3616.11','5.79','0.16%','3563.1','3616.48','248810512','32775852','-'],['2017/11/23','3630.87','3610.31','-20.18','-0.56%','3598.87','3654.75','315997472','41414824','-'],['2017/11/20','3620.79','3630.5','13.44','0.37%','3607.92','3640.53','310801984','41391088','-'],['2017/11/19','3573.78','3617.06','48.59','1.36%','3561.04','3618.21','247915584','32844260','-'],['2017/11/18','3605.06','3568.47','-36.33','-1.01%','3558.7','3617.07','297580736','39233876','-'],['2017/11/17','3629.98','3604.8','-2.16','-0.06%','3598.07','3678.27','383575456','52152036','-'],['2017/11/16','3522.46','3606.96','26.12','0.73%','3519.42','3607.61','276187040','36942184','-'],['2017/11/13','3600.76','3580.84','-52.06','-1.43%','3564.81','3632.56','345870944','46866864','-'],['2017/11/12','3656.82','3632.9','-17.35','-0.48%','3603.23','3659.31','361717600','48283260','-'],['2017/11/11','3635','3650.25','9.76','0.27%','3605.62','3654.88','360972672','46782220','-'],['2017/11/10','3617.4','3640.49','-6.4','-0.18%','3607.89','3669.53','429746592','56005512','-'],['2017/11/9','3588.5','3646.88','56.85','1.58%','3588.5','3673.76','503016704','63618404','-'],['2017/11/6','3514.44','3590.03','67.21','1.91%','3508.83','3596.38','429167040','54328220','-'],['2017/11/5','3459.22','3522.82','63.18','1.83%','3455.53','3585.66','553254976','67867464','-'],['2017/11/4','3325.62','3459.64','142.94','4.31%','3325.62','3459.65','339078752','42610440','-'],['2017/11/3','3330.32','3316.7','-8.39','-0.25%','3302.18','3346.27','192897440','24436056','-'],['2017/11/2','3337.58','3325.08','-57.48','-1.70%','3322.31','3391.06','230951136','28601932','-'],['2017/10/30','3380.28','3382.56','-4.75','-0.14%','3346.59','3417.2','243595120','30726678','-'],['2017/10/29','3387.77','3387.32','12.12','0.36%','3362.51','3411.71','235676016','29450842','-'],['2017/10/28','3417.01','3375.2','-59.14','-1.72%','3367.23','3439.76','293523296','36165620','-'],['2017/10/27','3409.14','3434.34','4.76','0.14%','3332.62','3441.57','328172768','40888724','-'],['2017/10/26','3448.65','3429.58','17.15','0.50%','3402','3457.52','365560864','45394252','-'],['2017/10/23','3377.55','3412.43','43.7','1.30%','3360.22','3422.02','347372864','42526308','-'],['2017/10/22','3292.29','3368.74','48.06','1.45%','3282.99','3373.78','323739328','37545200','-'],['2017/10/21','3428.56','3320.68','-104.65','-3.06%','3265.44','3447.26','458455424','51850924','-'],['2017/10/20','3377.55','3425.33','38.63','1.14%','3357.86','3425.52','318973760','38358252','-'],['2017/10/19','3401.63','3386.7','-4.65','-0.14%','3355.57','3423.4','378112160','45330364','-'],['2017/10/16','3358.3','3391.35','53.28','1.60%','3334.85','3393.02','395460576','45944784','-'],['2017/10/15','3255.03','3338.07','75.63','2.32%','3254.39','3338.3','316283840','36256556','-'],['2017/10/14','3280.02','3262.44','-30.79','-0.93%','3256.25','3307.32','295077760','33027752','-'],['2017/10/13','3262.16','3293.23','5.57','0.17%','3253.25','3298.63','297153120','33480608','-'],['2017/10/12','3193.54','3287.66','104.51','3.28%','3188.41','3318.71','386294688','43554100','-'],['2017/10/9','3146.64','3183.15','39.79','1.27%','3137.79','3192.72','234851456','25637910','-'],['2017/10/8','3156.07','3143.36','90.58','2.97%','3133.13','3172.28','234276048','25883034','-'],['2017/9/30','3052.84','3052.78','14.64','0.48%','3039.74','3073.3','146642448','15656919','-'],['2017/9/29','3055.22','3038.14','-62.62','-2.02%','3021.16','3068.3','163222672','16968660','-'],['2017/9/28','3085.57','3100.76','8.41','0.27%','3042.31','3103.07','156727536','16642240','-'],['2017/9/25','3130.85','3092.35','-50.34','-1.60%','3063','3149.95','236263872','24897112','-'],['2017/9/24','3126.49','3142.69','26.8','0.86%','3109.69','3151.16','212887712','23136904','-'],['2017/9/23','3137.72','3115.89','-69.73','-2.19%','3104.74','3164.04','236322672','25756004','-'],['2017/9/22','3161.32','3185.62','29.08','0.92%','3152.48','3213.48','274786176','30507132','-'],['2017/9/21','3072.09','3156.54','58.62','1.89%','3060.86','3159.88','239897360','25979668','-'],['2017/9/18','3100.28','3097.92','11.86','0.38%','3070.34','3122.05','209175392','21844244','-'],['2017/9/17','3131.98','3086.06','-66.2','-2.10%','3085.31','3204.7','317602912','33739328','-'],['2017/9/16','2998.04','3152.26','147.09','4.89%','2983.54','3182.93','277524512','28199226','-'],['2017/9/15','3043.8','3005.17','-109.63','-3.52%','2983.92','3081.7','249194448','24390460','-'],['2017/9/14','3221.17','3114.8','-85.44','-2.67%','3049.23','3229.48','346631168','37357680','-'],['2017/9/11','3189.48','3200.23','2.34','0.07%','3163.45','3223.76','224557808','25276946','-'],['2017/9/10','3190.55','3197.89','-45.2','-1.39%','3178.9','3243.28','273261760','29958108','-'],['2017/9/9','3182.55','3243.09','72.64','2.29%','3165.7','3256.74','375328000','41299144','-'],['2017/9/8','3054.44','3170.45','90.03','2.92%','3011.12','3174.71','255415456','26391038','-'],['2017/9/7','3149.38','3080.42','-79.75','-2.52%','3066.3','3217.58','296468096','30268972','-'],['2017/9/2','3027.68','3160.17','-6.46','-0.20%','3019.09','3194.48','438170176','42326236','-'],['2017/9/1','3157.83','3166.62','-39.36','-1.23%','3053.74','3180.33','432432448','42041164','-'],['2017/8/31','3203.56','3205.99','-26.36','-0.82%','3109.16','3207.86','397431392','43106860','-'],['2017/8/28','3125.26','3232.35','148.76','4.82%','3102.95','3235.84','443136928','47463100','-'],['2017/8/27','2978.03','3083.59','156.3','5.34%','2906.49','3085.42','400308384','40428928','-'],['2017/8/26','2980.79','2927.29','-37.68','-1.27%','2850.71','3092.04','466699680','46178896','-'],['2017/8/25','3004.13','2964.97','-244.94','-7.63%','2947.94','3123.03','352325088','35873576','-'],['2017/8/24','3373.48','3209.91','-297.84','-8.49%','3191.88','3388.36','334671776','35881888','-'],['2017/8/21','3609.96','3507.74','-156.55','-4.27%','3490.54','3652.84','369920480','45061648','-'],['2017/8/20','3754.57','3664.29','-129.82','-3.42%','3663.61','3788.01','390063072','50119500','-'],['2017/8/19','3646.8','3794.11','45.95','1.23%','3558.38','3811.43','475396224','59951332','-'],['2017/8/18','3999.13','3748.16','-245.5','-6.15%','3743.39','4006.34','543770816','72246720','-'],['2017/8/17','3947.84','3993.67','28.33','0.71%','3907.4','3994.54','460432064','62632768','-'],['2017/8/14','3976.41','3965.33','10.78','0.27%','3939.83','4000.68','467988224','64746644','-'],['2017/8/13','3869.91','3954.56','68.24','1.76%','3838.16','3955.79','430073280','57868552','-'],['2017/8/12','3881.23','3886.32','-41.59','-1.06%','3871.14','3937.77','442688256','59705028','-'],['2017/8/11','3928.81','3927.91','-0.51','-0.01%','3891.18','3970.34','538923456','71228992','-'],['2017/8/10','3786.03','3928.42','184.21','4.92%','3775.85','3943.62','497304320','65262204','-'],['2017/8/7','3692.61','3744.2','82.67','2.26%','3686.3','3756.74','340757184','44548504','-'],['2017/8/6','3625.5','3661.54','-33.03','-0.89%','3614.74','3710.57','274074656','35751512','-'],['2017/8/5','3745.65','3694.57','-61.97','-1.65%','3676.39','3782.35','366423008','48385028','-'],['2017/8/4','3621.85','3756.54','133.64','3.69%','3601.29','3757.03','362901664','46403624','-'],['2017/8/3','3614.99','3622.91','-40.82','-1.11%','3549.5','3648.94','363968704','44599160','-'],['2017/7/31','3655.67','3663.73','-42.04','-1.13%','3620.17','3729.51','350955712','46047224','-'],['2017/7/30','3773.79','3705.77','-83.4','-2.20%','3685.96','3844.37','457943232','61597792','-'],['2017/7/29','3689.82','3789.17','126.17','3.44%','3612.06','3792.07','434352096','55749196','-'],['2017/7/28','3573.14','3663','-62.56','-1.68%','3537.36','3762.53','563330048','68505752','-'],['2017/7/27','3985.57','3725.56','-345.35','-8.48%','3720.44','4051.16','556003264','72129808','-'],['2017/7/24','4124.75','4070.91','-53.02','-1.29%','4044.83','4184.45','627424896','84302208','-'],['2017/7/23','4022.27','4123.92','97.88','2.43%','4019.04','4132.61','563585984','74353184','-'],['2017/7/22','3996.43','4026.04','8.37','0.21%','3960.86','4042.34','520732224','67883192','-'],['2017/7/21','3939.9','4017.67','25.57','0.64%','3912.8','4041.82','504288000','64641684','-'],['2017/7/20','3948.42','3992.11','34.76','0.88%','3927.12','4021.33','539106688','68825560','-'],['2017/7/17','3831.42','3957.35','134.18','3.51%','3814.15','3994.48','481726272','59306700','-'],['2017/7/16','3758.5','3823.18','17.47','0.46%','3688.44','3877.51','492256224','56985892','-'],['2017/7/15','3874.97','3805.7','-118.78','-3.03%','3741.25','3914.27','601301312','70053656','-'],['2017/7/14','3958.37','3924.49','-45.9','-1.16%','3855.56','4035.43','670558784','83007464','-'],['2017/7/13','3918.99','3970.39','92.58','2.39%','3858.64','4030.19','643489024','78243056','-'],['2017/7/10','3707.46','3877.8','168.47','4.54%','3677.43','3959.22','586364288','68043416','-'],['2017/7/9','3432.45','3709.33','202.14','5.76%','3373.54','3748.48','656914624','67331096','-'],['2017/7/8','3467.4','3507.19','-219.93','-5.90%','3421.53','3599.25','680356928','70024832','-'],['2017/7/7','3654.78','3727.12','-48.79','-1.29%','3585.4','3750.57','698818752','77607256','-'],['2017/7/6','3975.21','3775.91','89','2.41%','3653.04','3975.21','831139264','94342040','-'],['2017/7/3','3793.71','3686.92','-225.85','-5.77%','3629.56','3927.13','548163072','64805412','-'],['2017/7/2','4058.62','3912.77','-140.93','-3.48%','3795.25','4080.39','586015616','73600680','-'],['2017/7/1','4214.15','4053.7','-223.52','-5.23%','4043.37','4317.05','598769408','83807088','-'],['2017/6/30','4006.75','4277.22','224.19','5.53%','3847.88','4279.97','709176576','94152464','-'],['2017/6/29','4289.77','4053.03','-139.84','-3.34%','3875.05','4297.47','673786368','90427136','-'],['2017/6/26','4399.93','4192.87','-334.91','-7.40%','4139.53','4456.9','565217920','78783568','-'],['2017/6/25','4711.76','4527.78','-162.37','-3.46%','4483.55','4720.7','572797568','86537976','-'],['2017/6/24','4604.58','4690.15','113.66','2.48%','4552.13','4691.77','543003712','81506272','-'],['2017/6/23','4471.61','4576.49','98.13','2.19%','4264.77','4577.94','473526112','69361720','-'],['2017/6/19','4689.93','4478.36','-306.99','-6.42%','4476.5','4744.08','452689632','68545816','-'],['2017/6/18','4942.52','4785.36','-182.54','-3.67%','4780.87','4966.77','507440896','78584504','-'],['2017/6/17','4890.55','4967.9','80.47','1.65%','4767.22','4983.66','537101120','83026672','-'],['2017/6/16','5004.41','4887.43','-175.56','-3.47%','4842.1','5029.68','550801408','89542056','-'],['2017/6/15','5174.42','5062.99','-103.36','-2.00%','5048.74','5176.79','637803968','106499200','-'],['2017/6/12','5143.34','5166.35','44.76','0.87%','5103.4','5178.19','625627904','106016744','-'],['2017/6/11','5101.44','5121.59','15.56','0.30%','5050.76','5122.46','563990528','97467056','-'],['2017/6/10','5049.2','5106.04','-7.5','-0.15%','5001.49','5164.16','596969024','100642824','-'],['2017/6/9','5145.98','5113.53','-18.35','-0.36%','5042.96','5147.45','729893824','115080864','-'],['2017/6/8','5045.69','5131.88','108.78','2.17%','4997.48','5146.95','855035072','130992456','-'],['2017/6/5','5016.09','5023.1','75.99','1.54%','4898.07','5051.63','772240832','123230064','-'],['2017/6/4','4912.95','4947.1','37.12','0.76%','4647.41','4947.96','674952384','105227024','-'],['2017/6/3','4924.38','4909.98','-0.55','-0.01%','4822.44','4942.06','611453824','101018000','-'],['2017/6/2','4844.7','4910.53','81.79','1.69%','4797.55','4911.57','623748096','99874576','-'],['2017/6/1','4633.1','4828.74','216.99','4.71%','4615.23','4829.5','593389056','93445544','-'],['2017/5/29','4603.47','4611.74','-8.52','-0.18%','4431.56','4698.19','611262400','95536560','-'],['2017/5/28','4943.74','4620.27','-321.45','-6.50%','4614.24','4986.5','782964544','124792600','-'],['2017/5/27','4932.85','4941.71','30.82','0.63%','4857.06','4958.16','681165376','111626184','-'],['2017/5/26','4854.85','4910.9','97.1','2.02%','4779.08','4911.69','704892864','113850936','-'],['2017/5/25','4660.08','4813.8','156.2','3.35%','4656.83','4814.67','682461376','107929560','-'],['2017/5/22','4584.98','4657.6','128.17','2.83%','4562.99','4658.27','655591296','100717320','-'],['2017/5/21','4456.44','4529.42','83.13','1.87%','4438.26','4530.48','464996512','72908056','-'],['2017/5/20','4434.98','4446.29','28.74','0.65%','4432.28','4520.54','514106208','80608056','-'],['2017/5/19','4285.78','4417.55','134.06','3.13%','4285.78','4418.4','436735232','69381256','-'],['2017/5/18','4277.9','4283.49','-25.2','-0.58%','4260.51','4324.83','380057440','59455952','-'],['2017/5/15','4366.82','4308.69','-69.62','-1.59%','4278.55','4366.82','439706208','66596564','-'],['2017/5/14','4372.82','4378.31','2.55','0.06%','4329.04','4397.75','449077952','66988224','-'],['2017/5/13','4402.38','4375.76','-25.46','-0.58%','4342.48','4415.63','510490464','78075496','-'],['2017/5/12','4342.37','4401.22','67.64','1.56%','4317.98','4402.31','521866400','79346376','-'],['2017/5/11','4231.27','4333.58','127.67','3.04%','4187.82','4334.88','488750528','71524664','-'],['2017/5/8','4152.98','4205.92','93.7','2.28%','4099.04','4206.86','397428096','55964868','-'],['2017/5/7','4197.9','4112.21','-117.05','-2.77%','4108.01','4213.76','394566656','54020632','-'],['2017/5/6','4311.64','4229.27','-69.44','-1.62%','4187.37','4376.35','481732992','71653624','-'],['2017/5/5','4479.85','4298.71','-181.76','-4.06%','4282.24','4488.87','572858624','80556608','-'],['2017/5/4','4441.34','4480.46','38.81','0.87%','4387.43','4487.57','494173376','71754080','-'],['2017/4/30','4483.01','4441.65','-34.96','-0.78%','4441.05','4507.34','526728000','77434920','-'],['2017/4/29','4446.12','4476.62','0.4','0.01%','4398.64','4499.94','519834208','75240176','-'],['2017/4/28','4527.63','4476.21','-51.18','-1.13%','4432.9','4572.39','767676416','106117216','-'],['2017/4/27','4441.93','4527.4','133.71','3.04%','4441.93','4529.73','671088512','97524208','-'],['2017/4/24','4355.95','4393.69','-20.82','-0.47%','4318.12','4416.38','628555008','91687296','-'],['2017/4/23','4414.48','4414.51','16.01','0.36%','4358.84','4444.41','667344640','96302488','-'],['2017/4/22','4304.6','4398.49','104.87','2.44%','4297.95','4400.19','680305088','97687696','-'],['2017/4/21','4212.19','4293.62','76.55','1.82%','4188.57','4294.38','634470656','86244776','-'],['2017/4/20','4301.35','4217.08','-70.22','-1.64%','4190.68','4356','857132800','100000000','-'],['2017/4/17','4254.72','4287.3','92.47','2.20%','4238.91','4317.22','701706240','91563304','-'],['2017/4/16','4055.92','4194.82','110.66','2.71%','4031.24','4195.31','551242944','71208248','-'],['2017/4/15','4135.65','4084.16','-51.4','-1.24%','4069.01','4175.49','613005824','77312592','-'],['2017/4/14','4125.78','4135.56','13.85','0.34%','4091.26','4168.35','610683520','81464520','-'],['2017/4/13','4072.72','4121.71','87.4','2.17%','4057.29','4128.07','589814208','78166736','-'],['2017/4/10','3947.49','4034.31','76.78','1.94%','3929.32','4040.35','484283648','66850416','-'],['2017/4/9','4006.13','3957.53','-37.28','-0.93%','3900.03','4016.4','585176832','81671088','-'],['2017/4/8','3976.53','3994.81','33.43','0.84%','3903.65','4000.22','618085440','83915928','-'],['2017/4/7','3899.42','3961.38','97.45','2.52%','3891.73','3961.67','570447552','74642400','-'],['2017/4/3','3803.38','3863.93','38.14','1.00%','3792.21','3864.41','473033312','63565136','-'],['2017/4/2','3827.69','3825.78','15.49','0.41%','3775.89','3835.45','479299680','63202892','-'],['2017/4/1','3748.34','3810.29','62.4','1.66%','3742.21','3817.08','447458304','59241832','-'],['2017/3/31','3822.99','3747.9','-38.67','-1.02%','3737.04','3835.57','561676032','72129488','-'],['2017/3/30','3710.61','3786.57','95.47','2.59%','3710.61','3795.94','564702400','69212536','-'],['2017/3/27','3686.13','3691.1','9','0.24%','3656.83','3710.48','408945184','50929848','-'],['2017/3/26','3641.94','3682.09','21.37','0.58%','3615.01','3707.32','488647200','61951560','-'],['2017/3/25','3680.95','3660.73','-30.68','-0.83%','3634.56','3693.15','521886336','64549892','-'],['2017/3/24','3692.57','3691.41','3.68','0.10%','3600.7','3715.87','639554688','75488472','-'],['2017/3/23','3640.1','3687.73','70.41','1.95%','3635.49','3688.25','536062816','66157464','-'],['2017/3/20','3587.08','3617.32','35.05','0.98%','3569.38','3632.34','516661664','65177196','-'],['2017/3/19','3576.02','3582.27','4.97','0.14%','3546.84','3600.68','537346624','61224968','-'],['2017/3/18','3510.5','3577.3','74.45','2.13%','3503.85','3577.66','545217152','61736700','-'],['2017/3/17','3469.6','3502.85','53.54','1.55%','3459.69','3504.12','520939520','60150068','-'],['2017/3/16','3391.16','3449.3','76.39','2.26%','3377.09','3449.3','399132416','47935532','-'],['2017/3/13','3359.49','3372.91','23.59','0.70%','3352.15','3391.25','328410144','37404140','-'],['2017/3/12','3314.81','3349.32','58.42','1.78%','3300.49','3360.05','357295104','40719240','-'],['2017/3/11','3289.59','3290.9','4.83','0.15%','3278.47','3325.05','282985536','32757308','-'],['2017/3/10','3289.08','3286.07','-16.34','-0.49%','3277.09','3309.92','285817568','32995596','-'],['2017/3/9','3224.31','3302.41','61.22','1.89%','3198.37','3307.7','321495456','35992752','-'],['2017/3/6','3248.04','3241.19','-7.29','-0.22%','3234.53','3266.93','282915808','32834414','-'],['2017/3/5','3264.08','3248.48','-31.06','-0.95%','3221.67','3266.64','320663584','37358000','-'],['2017/3/4','3264.18','3279.53','16.48','0.51%','3250.48','3286.59','293639520','34678976','-'],['2017/3/3','3317.7','3263.05','-73.23','-2.20%','3260.43','3317.7','382044608','44159348','-'],['2017/3/2','3332.72','3336.28','25.98','0.78%','3298.67','3336.76','346445664','41025956','-'],['2017/2/27','3296.83','3310.3','11.94','0.36%','3291.01','3324.55','299163712','33501958','-'],['2017/2/26','3222.15','3298.36','69.52','2.15%','3202.19','3300.62','301263872','33434746','-'],['2017/2/25','3256.48','3228.84','-18.06','-0.56%','3215.55','3257.22','233348096','26514336','-'],['2017/2/17','3230.88','3246.91','24.54','0.76%','3230.77','3255.73','228332624','26334004','-'],['2017/2/16','3206.14','3222.36','18.54','0.58%','3195.88','3228.85','223797440','26595070','-'],['2017/2/13','3186.81','3203.83','30.41','0.96%','3182.79','3237.16','261290432','29301768','-'],['2017/2/12','3157.96','3173.42','15.71','0.50%','3134.24','3181.77','194592320','22969158','-'],['2017/2/11','3145.76','3157.7','16.11','0.51%','3139.05','3166.42','172840096','21086256','-'],['2017/2/10','3090.49','3141.59','46.47','1.50%','3084.25','3142.1','193817136','22508492','-'],['2017/2/9','3063.51','3095.12','19.22','0.62%','3049.11','3119.03','206108384','24071968','-'],['2017/2/6','3120.09','3075.91','-60.62','-1.93%','3052.94','3129.54','246749680','26650278','-'],['2017/2/5','3251.21','3136.53','-37.6','-1.18%','3135.82','3251.21','306139296','34826696','-'],['2017/2/4','3212.82','3174.13','-30.78','-0.96%','3171.14','3238.98','249098080','29015516','-'],['2017/2/3','3156.09','3204.91','76.61','2.45%','3129.73','3207.94','248192160','28335594','-'],['2017/2/2','3148.14','3128.3','-82.06','-2.56%','3122.57','3175.13','250861632','26684996','-'],['2017/1/30','3273.75','3210.36','-51.94','-1.59%','3210.31','3288.5','258312544','28426564','-'],['2017/1/29','3259','3262.3','-43.43','-1.31%','3234.24','3286.79','274658624','29642450','-'],['2017/1/28','3325.72','3305.74','-47.22','-1.41%','3294.66','3354.8','301927104','34156428','-'],['2017/1/27','3389.85','3352.96','-30.22','-0.89%','3290.22','3390.22','374517568','41829884','-'],['2017/1/26','3347.26','3383.18','31.42','0.94%','3321.31','3384.8','317540992','35842744','-'],['2017/1/23','3357.1','3351.76','8.42','0.25%','3328.29','3406.79','366249248','42097952','-'],['2017/1/22','3327.32','3343.34','19.73','0.59%','3293.98','3352.38','353382976','40787408','-'],['2017/1/21','3189.08','3323.61','150.56','4.74%','3178.34','3337','410956032','47375868','-'],['2017/1/20','3114.56','3173.05','56.7','1.82%','3100.48','3190.25','357080800','41629524','-'],['2017/1/19','3189.73','3116.35','-260.14','-7.70%','3095.07','3262.21','401098784','40988600','-'],['2017/1/16','3343.6','3376.5','40.04','1.20%','3340.49','3400.32','339876768','39225388','-'],['2017/1/15','3224.07','3336.46','114.02','3.54%','3207.54','3337.08','282546240','33061054','-'],['2017/1/14','3242.34','3222.44','-12.86','-0.40%','3193.98','3268.48','240190752','26720452','-'],['2017/1/13','3223.54','3235.3','5.98','0.19%','3214.41','3259.39','230725760','27358878','-'],['2017/1/12','3258.21','3229.32','-56.1','-1.71%','3191.58','3275.19','322064672','36627308','-'],['2017/1/9','3276.97','3285.41','-8.04','-0.24%','3267.51','3404.83','410240864','45864804','-'],['2017/1/8','3371.96','3293.46','-80.5','-2.39%','3285.09','3381.57','371131200','39923032','-'],['2017/1/7','3326.65','3373.95','22.51','0.67%','3312.21','3374.9','391918880','43641672','-'],['2017/1/6','3330.8','3351.45','0.93','0.03%','3303.18','3394.22','501661696','53239848','-'],['2017/1/5','3258.63','3350.52','115.84','3.58%','3253.88','3369.28','531352384','54976008','-'],['','','','','','','','','',''],['','','','','','','','','','']].reverse();

function calculateMA(dayCount, data) {
    var result = [];
    for (var i = 0, len = data.length; i < len; i++) {
        if (i < dayCount) {
            result.push('-');
            continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
            sum += data[i - j][1];
        }
        result.push(sum / dayCount);
    }
    // result=Math.round(result*100)/100
    return result;
}


var dates = rawData.map(function (item) {
    return item[0];
});

var data = rawData.map(function (item) {
    return [+item[1], +item[2], +item[5], +item[6]];
});
var option = {
    backgroundColor: '#fff',
    legend: {
        data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30'],
        inactiveColor: '#777',
        textStyle: {
            color: '#21202D'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false,
            type: 'cross',
            lineStyle: {
                color: '#376df4',
                width: 2,
                opacity: 1
            }
        }
    },
    xAxis: {
        type: 'category',
        data: dates,
        axisLine: { lineStyle: { color: '#8392A5' } }
    },
    yAxis: {
        scale: true,
        axisLine: { lineStyle: { color: '#8392A5' } },
        splitLine: { show: false }
    },
    // 图表位置
    grid: {
        bottom: 80,
        left: 240,
        right:240
    },
    dataZoom: [{

        textStyle: {
            color: '#8392A5'
        },
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        dataBackground: {
            areaStyle: {
                color: '#8392A5'
            },
            lineStyle: {
                opacity: 0.8,
                color: '#8392A5'
            }
        },
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }, {
        type: 'inside'
    }],
    animation: false,
    series: [{
            type: 'candlestick',
            name: '日K',
            data: data,
            itemStyle: {
                normal: {
                    color: '#FD1050',
                    color0: '#0CF49B',
                    borderColor: '#FD1050',
                    borderColor0: '#0CF49B'
                }
            }
        },
        {
            name: 'MA5',
            type: 'line',
            data: calculateMA(5, data),
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            }
        },
        {
            name: 'MA10',
            type: 'line',
            data: calculateMA(10, data),
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            }
        },
        {
            name: 'MA20',
            type: 'line',
            data: calculateMA(20, data),
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            }
        },
        {
            name: 'MA30',
            type: 'line',
            data: calculateMA(30, data),
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            }
        }
    ],
    // media: [{
    //             query: {
    //                 maxWidth: 500 // 当容器宽度小于 500 时。
    //             },
    //             option: {
    //                 legend: {
    //                     right: 10, // legend 放置在右侧中间。
    //                     top: '15%',
    //                     orient: 'vertical' // 纵向布局。
    //                 },
    //                 series: [ // 两个饼图上下布局。
    //                     // {
    //                     //     cross: [20, '50%'],
    //                     //     center: ['50%', '30%']
    //                     // }
    //                 ]
    //             }
    //     }    ]
        // {
        //     query: { ... }, // 这里写规则。
        //     option: { // 这里写此规则满足下的option。
        //         legend: { ... },
        //         ...
        //     }
        // },
        // { // 这条里没有写规则，表示『默认』，
        //     option: { // 即所有规则都不满足时，采纳这个option。
        //         legend: { ... },
        //         ...
        //     }
        // }

};
// $.get('data.json').done(function (data) {
//     myChart.hideLoading();
//     myChart.setOption(...);
// });

        myChart.setOption(option);
      	window.addEventListener("resize",function(){   
            myChart.resize();
        });
        // myChart.showLoading();

