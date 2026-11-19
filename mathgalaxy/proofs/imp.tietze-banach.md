# imp.tietze-banach
`imp.tietze-banach` · 推出 · strong 边 · 根 `../`

`def.paracompact` 仿紧空间 + `def.banach-space` Banach 空间 + `def.chaus` 紧 Hausdorff 空间范畴 + `def.continuous` 连续（ε-δ 判据） → `thm.tietze-banach` Tietze 延拓（Banach 值）

**分层归约**。

① 有限维：$V = \mathbb{R}^{m}$，逐坐标用经典 Tietze 延拓（正规空间上实值连续函数的延拓，本质是 Urysohn 引理）。

② 一般可分 Banach：每个可分 Banach 空间都同构于 $\ell^{\infty}$ 的闭子空间，而 $\ell^{\infty}$ 是 **Lipschitz 收缩核** —— 于是可以先把映射延拓到 $\ell^{\infty}$ 再收缩回来。

③ 不可分的情形用「紧像落在某个可分闭子空间里」再归约到 ②。

⭐ **为什么凝聚态数学要用它。** §8.2 的主定理「实 Banach 空间在紧 Hausdorff 空间上零调」走的是「把一般紧 Hausdorff 空间 $S$ 用 Stonean 的 $S_{0}$ 覆盖、再把偏差压回去」的路线；

> 续见 proofs/imp.tietze-banach.2.md
