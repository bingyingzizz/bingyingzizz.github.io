# imp.christoffel-frame
`imp.christoffel-frame` · 推出 · strong 边 · 根 `../`

`def.christoffel-symbol` 克里斯托费尔记号 → `prop.christoffel-frame` 标架下的联络系数

**① Koszul 公式在正交标架上退化。** 对单位正交标架 $e_{1},e_{2}$，Koszul 公式里的三个度量导数项 $e_{i}\langle e_{j},e_{k}\rangle$ 全为零，剩下
$$2\langle \nabla_{e_{i}}e_{j},e_{k}\rangle = \langle [e_{i},e_{j}],e_{k}\rangle-\langle [e_{j},e_{k}],e_{i}\rangle+\langle [e_{k},e_{i}],e_{j}\rangle .$$
而正交标架下 $\omega^{k}_{j}(e_{i}) = \langle \nabla_{e_{i}}e_{j},e_{k}\rangle$，两边除以 $2$ 即得 ①。
**② 算正交参数网的单位化标架。** $e_{1} = \partial_{u}/\sqrt E$、$e_{2} = \partial_{v}/\sqrt G$，于是对任意 $X$
$$\omega^{1}_{2}(X) = \langle \nabla_{X}e_{2},e_{1}\rangle = \frac{1}{\sqrt{EG}}\langle \nabla_{X}\partial_{v},\partial_{u}\rangle ,$$
因为 $X$ 作用在系数 $1/\sqrt G$ 上那一项与 $\par

> 续见 proofs/imp.christoffel-frame.2.md
