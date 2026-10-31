# 可度量化空间的性质　`prop.metrizable-normal`　·　说明
根 `../`

**证明** 取与拓扑相容的度量 $d$。
1. $\{\, B_{d}(x, 1/n) \,\}_{n \ge 1}$ 是可数局部基，故第一可数；$x \ne y$ 时取 $r := d(x, y)/2$，两个开球不交，故 Hausdorff。
2. 设 $A, B$ 是不交闭集，令 $f(x) := \dfrac{d(x, A)}{d(x, A) + d(x, B)}$（函数 $d(\cdot, A)$ 是 $1$-Lipschitz 的，故连续；分母恒正：距 $A$、$B$ 同时为零的点不存在，因为 $A, B$ 不交且都闭）。于是 $f|_{A} \equiv 0$、$f|_{B} \equiv 1$，$f^{-1}([0, 1/2))$ 与 $f^{-1}((1/2, 1])$ 就是分开 $A, B$ 的不交开集。
3. Stone 定理：度量空间仿紧。
最后一步：以上三条都是拓扑性质（同胚不变），而可度量化正是「与某个距离空间同胚」，于是它们对 $X$ 也成立。∎

⭐ 于是整条层级可以写全：**可度量化 $\implies$ 仿紧 Hausdorff $\implies$ 正规 $\implies$ 正则 $\implies$ Hausdorff**（第二个箭头是本包的定理，第一个是 Stone 加本命题）。

> 续见 notes/prop.metrizable-normal.2.md
