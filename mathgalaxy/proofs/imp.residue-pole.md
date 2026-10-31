# 留数等于 Laurent 系数 $c_{-1}$ + $\psi$ 的 Taylor 展开 $\implies$ 极点留数公式
`imp.residue-pole` · 推出 · strong 边 · 根 `../`

`def.residue` 留数 + `def.laurent-series` Laurent 级数 → `prop.residue-at-pole` 极点处的留数公式

**把 $\psi$ 展开。** $\psi$ 在 $a$ 的邻域全纯，故（Taylor 展开那条边）

$$\psi(z) = \sum_{k=0}^{\infty}\frac{\psi^{(k)}(a)}{k!}(z - a)^k.$$

**除以 $(z - a)^m$。**

$$f(z) = \frac{\psi(z)}{(z - a)^m} = \sum_{k=0}^{\infty}\frac{\psi^{(k)}(a)}{k!}(z - a)^{k - m}.$$

这是一个以 $a$ 为中心的 Laurent 级数（在 $0 < |z - a| < \varepsilon$ 内成立），而且它就是 $f$ 的 Laurent 级数 —— 因为 Laurent 系数由积分公式唯一确定，写成什么样都一样。

**读 $c_{-1}$。** 幂次 $k - m = -1$ 当且仅当 $k = m - 1$，对应的系数是

$$c_{-1} = \frac{\psi^{(m-1)}(a)}{(m-1)!}.$$

由留数的定义 $\operatorname{Res}(f, a) = c_{-1}$，即得所求。

> 续见 proofs/imp.residue-pole.2.md
