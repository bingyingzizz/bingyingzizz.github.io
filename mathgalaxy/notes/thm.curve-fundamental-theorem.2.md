# 曲线基本定理　`thm.curve-fundamental-theorem`　·　说明
根 `../`

⚠️ **正则性只能到 $C^{2}$**：Frenet 方程组 $\gamma^{\prime} = t$、$t^{\prime} = \kappa n$、$n^{\prime} = -\kappa t+\tau b$、$b^{\prime} = -\tau n$ 关于 $(\gamma,t,n,b)$ 是**线性**的，系数 $\kappa,\tau$ 只连续 $\implies$ 解只 $C^{1}$ $\implies$ $\gamma\in C^{2}$。反例：$\kappa(s) = 1+\lvert s\rvert$（连续、在 $0$ 处不可导）$\implies$ $\gamma^{\prime\prime} = \kappa n$ 连续，但 $\gamma^{\prime\prime\prime} = \kappa^{\prime}n+\kappa n^{\prime}$ 在 $s = 0$ 处不存在，故 $\gamma\notin C^{3}$。要 $C^{3}$ 就必须假设 $\kappa,\tau\in C^{1}$。

**怎么用**：判断两条曲线是否全等，只要比 $\kappa,\tau$。这是曲线论里「不变量完备」的意思，与曲面论里「$I,II$ 决定曲面」平行。

⚠️ 唯一性是**局部**的表述在整体区间上的直接推广：$I$ 可以任意（不必紧），因为线性 ODE 的解在整个区间上存在。
