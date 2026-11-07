# 离散函子保直和　`prop.discrete-functor-coproduct`　·　说明
根 `../`

**证明。** $(-)^{\mathrm{disc}}$ 是遗忘函子的**左伴随** ✓，左伴随保余极限、特别地保直和 ✓。∎

⚠️ 对**积**不成立：$(-)^{\mathrm{disc}}$ 是左伴随，一般不保积。但差**不是**「直积换成直和」：$\prod_i M_i^{\mathrm{disc}}$ 严格大于 $(\prod_i M_i)^{\mathrm{disc}}$，多出来的是「**各坐标分别局部常值、但联合不局部常值**」的族。例：$S$ 取 Cantor 集、$M_i = \mathbb{Z}/2$ —— 每个坐标函数 $S \to M_i$ 都局部常值，而「逐位取值」的联合映射 $S \to \prod_i M_i$ 不局部常值：左边有、右边没有。
