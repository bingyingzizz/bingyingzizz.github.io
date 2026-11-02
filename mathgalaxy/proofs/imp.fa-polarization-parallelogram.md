# 极化恒等式 $\implies$ 平行四边形法则刻画内积
`imp.fa-polarization-parallelogram` · 推出 · strong 边 · 根 `../`

`thm.polarization` 极化恒等式 → `thm.parallelogram-inner-product` 平行四边形法则

必要性：展开 $\|x \pm y\|^2 = \|x\|^2 \pm 2\operatorname{Re}\langle x,y\rangle + \|y\|^2$，两式相加即得。
充分性（实情形）：令 $\langle x,y\rangle := \frac14(\|x+y\|^2 - \|x-y\|^2)$。

对称性显然；线性性把 $\langle x + x', y\rangle - \langle x,y\rangle - \langle x',y\rangle$ 展开成两两差平方，用平行四边形法则整理得 $0$；

齐次性先对整数、再对有理数，最后用范数的**连续性**推到实数。

复情形另验 $\langle x, iy\rangle = i\langle x,y\rangle$。

$\blacksquare$

> 充分性里唯一的「分析」输入是范数的连续性；其余全是代数。
