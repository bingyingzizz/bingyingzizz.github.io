# Courant–Fischer 极小极大原理　`thm.courant-fischer`　·　说明
根 `../`

下界：取 $S_{0} = \operatorname{span}(u_{1}, \ldots, u_{k})$。$S_{0}$ 中的 $x$ 满足 $c_{k+1} = \cdots = c_{n} = 0$，故 $R_{A}(x)$ 是 $\lambda_{1}, \ldots, \lambda_{k}$ 的加权平均，$\ge \lambda_{k}$；取 $x = u_{k}$ 得等号。于是 $\min_{S_{0}} R_{A} = \lambda_{k}$，取 $\max$ 得 $\ge \lambda_{k}$。两边合起来即第一等式 ✓。

**第二等式**。上界：任取 $\dim T = n-k+1$。$T$ 与 $\operatorname{span}(u_{1}, \ldots, u_{k})$ 的维数之和 $> n$，故有交，取交中单位向量 $x$；它的 $c_{k+1} = \cdots = c_{n} = 0$，故 $R_{A}(x) \ge \lambda_{k}$，于是 $\max_{T} R_{A} \ge \lambda_{k}$ 对一切 $T$ 成立，取 $\min$ 得 $\ge \lambda_{k}$。

下界：取 $T_{0} = \operatorname{span}(u_{k}, \ldots, u_{n})$（维数 $n-k+1$）。$T_{0}$ 中的 $x$ 满足 $c_{1} = \cdots = c_{k-1} = 0$，故 $R_{A}(x) \le \lambda_{k}$，且 $x = u_{k}$ 取等号；于是 $\max_{T_{0}} R_{A} = \lambda_{k}$，取 $\min$ 得 $\le \lambda_{k}$。两边合起来即第二等式 ✓。

> 续见 notes/thm.courant-fischer.3.md
