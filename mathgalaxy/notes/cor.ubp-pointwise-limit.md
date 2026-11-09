# 逐点极限的范数界　`cor.ubp-pointwise-limit`　·　说明
根 `../`

**证明。** 先注意 $u$ 线性：对 $x, y \in E$、$\alpha, \beta \in \mathbb{K}$，由 $u_n$ 线性与极限的线性，

$$u(\alpha x + \beta y) = \lim_n u_n(\alpha x + \beta y) = \alpha \lim_n u_n x + \beta \lim_n u_n y = \alpha u x + \beta u y .$$

**逐点有界。** 对每个 $x$，收敛数列 $(u_n x)$ 有界，故 $M(x) := \sup_n \|u_n x\| < \infty$。

**一致有界。** 对族 $\{u_n\} \subseteq B(E, F)$ 用共鸣定理（$E$ 完备、$F$ 赋范）：$C := \sup_n \|u_n\| < \infty$。

**范数界。** 对任意 $x$，

$$\|u x\| = \lim_n \|u_n x\| = \liminf_n \|u_n x\| \le \liminf_n \bigl( \|u_n\| \, \|x\| \bigr) = \bigl( \liminf_n \|u_n\| \bigr) \|x\| ,$$

所以 $u$ 有界且 $\|u\| \le \liminf_n \|u_n\|$。$\blacksquare$

⭐ 这条把「逐点收敛」升级成「极限算子的范数估计」：不需要预先知道 $\sup_n \|u_n\|$ 有限，共鸣定理自动给出。它在数值分析里判断「算子序列的极限仍是算子」时最常用。

> 续见 notes/cor.ubp-pointwise-limit.2.md
