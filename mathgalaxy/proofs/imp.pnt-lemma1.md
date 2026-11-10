# 按素数幂的指数分组
`imp.pnt-lemma1` · 推出 · strong 边 · 根 `../`

`def.prime-counting` 素数计数函数 → `lem.psi-theta-sum` ψ 与 θ 的分组恒等式

由定义 $\psi(x)=\sum_{p^{k}\le x}\log p$。把求和按 $k$ 分组：



$$\psi(x)=\sum_{k\ge1}\sum_{p\le x^{1/k}}\log p=\sum_{k\ge1}\theta\bigl(x^{1/k}\bigr).$$



当 $p\ge2$ 时 $p^{k}\le x$ 给出 $k\le\log_{2}x$，故和式有限。∎
