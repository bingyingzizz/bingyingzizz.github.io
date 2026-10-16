# 四个标准反例　`prop.convergence-counterexamples`　·　说明
根 `../`

**四个例子逐条验证。**
- **(i) 一致但不 $L^{1}$**：$f_{n} = \frac1n\chi_{(0,n)}$，$\sup_{x}|f_{n}(x)| = \frac1n \to 0$，故**一致收敛** ✓；但 $\int f_{n}\,\mathrm{d}m = 1 \not\to 0$，所以**不 $L^{1}$ 收敛** ✓（质量往外跑，越来越扁越来越长）。
- **(ii) 逐点但不一致、不 $L^{1}$**：$f_{n} = \chi_{(n, n+1)}$，对每个固定的 $x$，$n > x$ 之后 $f_{n}(x) = 0$，故**逐点（因而 a.e.）收敛到 $0$** ✓；但 $\sup_{x}|f_{n}| = 1$ 不趋于 $0$ $\implies$ **不一致收敛** ✓，且 $\int f_{n} = 1 \not\to 0$ $\implies$ 不 $L^{1}$ 收敛 ✓。
- **(iii) a.e. 但不 $L^{1}$、也不被可积函数控制**：$f_{n} = n\,\chi_{(0, 1/n)}$，逐点收敛到 $0$ ✓，但 $\int f_{n} = 1$；任何可积控制函数 $g$ 都要满足 $g \ge n\chi_{(0,1/n)}$ 无穷多次，从而 $\int g = \infty$ $\implies$ **控制收敛定理里的控制函数不能省** ✓。
- **(iv) 依测度但不 a.e.**：把 $[0,1]$ 按 $2^{-m}$ 等分（$m = 1, 2, \ldots$），第 $m$ 层依次取各单位区间的特征函数排成一列 $f_{1}

> 续见 notes/prop.convergence-counterexamples.2.md
