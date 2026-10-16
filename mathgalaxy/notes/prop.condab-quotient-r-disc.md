# R/R_disc 在 Stone 上的截面　`prop.condab-quotient-r-disc`　·　说明
根 `../`

**证明。** 凝聚态阿贝尔群里的短正合列
$$0 \longrightarrow \mathbb{R}^{\mathrm{disc}} \longrightarrow \mathbb{R} \longrightarrow Q \longrightarrow 0$$
给出长正合列
$$0 \to \Gamma(S, \mathbb{R}^{\mathrm{disc}}) \to \Gamma(S, \mathbb{R}) \to \Gamma(S, Q) \to H^{1}_{\mathrm{cond}}(S, \mathbb{R}^{\mathrm{disc}}).$$
末项为零：$S$ 是 Stone 空间，而 $\mathbb{R}^{\mathrm{disc}}$ 对应的凝聚态阿贝尔群就是**常**凝聚态群 $\underline{\mathbb{R}}$，由「Stone 空间上常系数零调」得 $H^{1} = 0$ ✓。再看前两项：$\Gamma(S, \mathbb{R}) = \operatorname{Hom}_{\mathrm{Cond}}(S, \mathbb{R}) = C(S, \mathbb{R})$ ✓；$\Gamma(S, \mathbb{R}^{\mathrm{disc}}) = C(S, \mathbb{R}^{\mathrm{disc}})$ —— 映入**离散**空间 $\mathbb{R}^{\mathrm{disc}}$ 的连续映射正是**局部常值**映射 ✓（$\mathbb{R}^{\mathrm{disc}}$ 的每个单点集都是开的，所以连续函数在每个点上局部常值）。于是 $\Gamma(S, Q) = C(S,\mathbb{R})/C(S,\mathbb{R}^{\mathrm{disc}})$ ✓。∎

> 续见 notes/prop.condab-quotient-r-disc.2.md
