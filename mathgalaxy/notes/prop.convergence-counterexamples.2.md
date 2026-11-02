# 四个标准反例　`prop.convergence-counterexamples`　·　说明
根 `../`

任何可积控制函数 $g$ 都要满足 $g \ge n\chi_{(0,1/n)}$ 无穷多次，从而 $\int g = \infty$ $\implies$ **控制收敛定理里的控制函数不能省** ✓。
- **(iv) 依测度但不 a.e.**：把 $[0,1]$ 按 $2^{-m}$ 等分（$m = 1, 2, \ldots$），第 $m$ 层依次取各单位区间的特征函数排成一列 $f_{1}, f_{2}, \ldots$。

$m(E_{n}) = 2^{-m} \to 0$ $\implies$ **依测度收敛** ✓；

但每个点都被无穷多次盖住、也被无穷多次漏掉，故 $f_{n}(x)$ 对每个 $x$ **都不收敛** ✓。

∎
⭐ 机制：**区间越来越窄，但位置不停地搬家** —— 质量在每一处只停留一瞬，所以处处不收敛，而出错集合的测度趋于零。

(iii) 是「a.e. 收敛 $\nRightarrow L^{1}$ 收敛」的标准反例 —— 也是 DCT 里「控制函数不能省」的根据。

> 续见 notes/prop.convergence-counterexamples.3.md
