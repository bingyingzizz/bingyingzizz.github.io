# 级数的奇偶拆分 $\implies$ Euler 公式
`imp.euler-formula` · 推出 · strong 边 · 根 `../`

`def.exp-function` 指数函数 + `def.trig-function` 正弦与余弦 → `thm.euler-formula` Euler 公式

把 $\exp(i\theta)$ 的级数按 $n$ 的奇偶拆开：

$$\exp(i\theta) = \sum_{n=0}^{\infty} \frac{(i\theta)^{n}}{n!} = \sum_{k=0}^{\infty} \frac{(i\theta)^{2k}}{(2k)!} + \sum_{k=0}^{\infty} \frac{(i\theta)^{2k+1}}{(2k+1)!}$$

用 $i^{2k} = (-1)^{k}$、$i^{2k+1} = (-1)^{k} i$：

$$= \sum_{k=0}^{\infty} \frac{(-1)^{k}\theta^{2k}}{(2k)!} + i \sum_{k=0}^{\infty} \frac{(-1)^{k}\theta^{2k+1}}{(2k+1)!} = \cos\theta + i\sin\theta$$

（拆分与重排的合法性来自绝对收敛。）取 $\theta = \pi$：由 $\cos\pi = -1$、$\sin\pi = 0$ 得 $e^{i\pi} = -1$。∎

> 整条证明只有「拆奇数项与偶数项」这一个动作 —— 但这一步把指数函数与三角函数之间的关系揭示成**一个恒等式**，而不是两个巧合。
