# 光滑单位分解　`thm.smooth-partition-unity`　·　说明
根 `../`

**证明**。两块砖：$\mathbb{R}^{n}$ 上的鼓包函数，以及流形的仿紧性（局部有限加细）。

**第一步：造鼓包函数**。令 

$$b(t) = \begin{cases} e^{-1/t}, & t > 0,\\ 0, & t \le 0,\end{cases}\qquad \beta(x) = \frac{b(1 - \lVert x\rVert^{2})}{b(1 - \lVert x\rVert^{2}) + b(\lVert x\rVert^{2} - \tfrac{1}{4})}.$$

 $b$ 在 $t = 0$ 处各阶导数都为 $0$（$e^{-1/t}$ 趋于 $0$ 比任何多项式快），故 $b$ 光滑。分母两项不同时为零且恒正（对 $\lVert x\rVert \in [\tfrac{1}{2}, 1]$ 恰有一项为正），故 $\beta$ 光滑；并且 $\beta \equiv 1$ 当 $\lVert x\rVert \le \tfrac{1}{2}$、$\beta \equiv 0$ 当 $\lVert x\rVert \ge 1$。把 $\beta$ 平移伸缩就得到任意球上的鼓包。

> 续见 notes/thm.smooth-partition-unity.2.md
