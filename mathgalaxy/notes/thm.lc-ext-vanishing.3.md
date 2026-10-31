# 局部紧阿贝尔群高次 Ext 消失　`thm.lc-ext-vanishing`　·　说明
根 `../`

**证明（按结构定理分三类，逐类掐掉）。** 局部紧 Hausdorff 阿贝尔群都是「离散群」被「有限维实 Banach 空间 $\oplus$ 连通紧 Hausdorff 阿贝尔群」扩张出来的。于是只需对三类源与三类靶交叉处理：
- **$M$ 离散**：有两段自由消解，长正合列把 $\operatorname{Ext}^{n}$（$n \ge 2$）全部掐掉（自由对象只在 $0$ 次有 Ext）。
- **$N$ 离散**：由连通局部紧群对离散群的那条（Exercises 8.18）同样只剩 $0, 1$ 两格。
- **$N$ 实 Banach**：由「紧 $\to$ Banach 全零」与「有限维 Banach 之间的 $\operatorname{RHom}$ 只有 $0$ 次」把高次掐掉。
- **$N$ 连通紧 Hausdorff**：有兩段消解 $0 \to N \to T^{E} \to T^{E'} \to 0$，故只需证 $\operatorname{Ext}^{n}_{\mathbb{Z}}(M, T^{E}) = \operatorname{Ext}^{n}_{\mathbb{Z}}(M, T)^{E} = 0$（$n \ne 0,1$），而这由 $\operatorname{RHom}_{\mathbb{Z}}(M, T) \cong M^{\vee}$（上一条 Pontryagin 对偶）集中在次数 $0$ 给出。∎
