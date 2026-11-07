# Mayer–Vietoris（同调）　`thm.mv-homology`　·　说明
根 `../`

其中 $b_{p}$ 是 $\Delta^{p}$ 的重心、$[b, c]$ 表示以 $b$ 为锥顶在链 $c$ 上作锥、$\partial\Delta^{p} = \sum_{i}(-1)^{i}\Delta^{p}_{i}$ 是标准边缘。锥公式 $\partial[b, c] = c - [b, \partial c]$ 给出

$$\partial\operatorname{sd}_{p} = \operatorname{sd}_{p-1}(\partial\Delta^{p}).$$

再定义 $t_{0} := 0$ 与递归

$$c_{p} := \operatorname{sd}_{p} - \operatorname{id}_{p} - t_{p-1}(\partial\Delta^{p}),\qquad t_{p} := [b_{p},\ c_{p}],$$

其中 $\operatorname{id}_{p}$ 是恒等 $p$-单纯形。对 $p$ 归纳验证 $\partial c_{p} = 0$（用到 $\partial\partial = 0$ 与归纳假设），故 $\partial t_{p} = c_{p}$，即

$$\partial t_{p} + t_{p-1}(\partial\Delta^{p}) = \operatorname{sd}_{p} - \operatorname{id}_{p}.$$

基例 $p = 0$ 是 $\operatorname{sd}_{0} = \operatorname{id}_{0}$、$t_{0} = 0$。

> 续见 notes/thm.mv-homology.3.md
