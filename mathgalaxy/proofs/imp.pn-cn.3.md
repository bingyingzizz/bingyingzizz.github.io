# imp.pn-cn
`imp.pn-cn` · 推出 · strong 边 · 根 `../`

`def.perfectly-normal-space` 完美正规空间 + `lem.urysohn` Urysohn 引理 → `def.completely-normal-space` 完全正规空间

**第三步：在 $H$ 上分离。** 在 $H$ 上 $f + g > 0$：若 $f(x) = g(x) = 0$，则 $x \in F \cap G \cap H = A \cap B = \emptyset$，矛盾。令
$$h := \frac{f}{f + g}\Big|_{H} : H \to [0, 1] .$$
$h$ 连续；$x \in A$ 时 $f(x) = 0$，故 $h(x) = 0$；$x \in B$ 时 $g(x) = 0$，而 $f(x) > 0$（否则 $x \in F \cap G \cap H = A \cap B$），故 $h(x) = 1$。取
$$U := h^{-1}\bigl([0, 1/3)\bigr), \qquad V := h^{-1}\bigl((2/3, 1]\bigr) ,$$
则 $U, V$ 是 $H$ 中不交开集，$A \subseteq U$、$B \subseteq V$。由 $A, B$ 任意，$H$ 正规 ✓（这一步只用「两个不交闭集可被连续函数分离 $\implies$ 正规」的初等方向）。

**第四步：$H$ 任意。** 完全正规要求每个子空间都正规；$H \subseteq X$ 是任取的，故 $X$ 完全正规 ✓。∎
