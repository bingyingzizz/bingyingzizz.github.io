# imp.cohomology-exact-sequence
`imp.cohomology-exact-sequence` · 推出 · strong 边 · 根 `../`

`def.cochain-complex` 上链复形 + `def.cohomology` 同调 + `def.image` 像 / 余像 → `prop.cohomology-exact-sequence` 同调的短正合列

**证明。** 记 $Z^{k} := \ker d^{k}$、$B^{k} := \operatorname{im} d^{k-1}$，于是 $H^{k} = Z^{k}/B^{k}$、$\operatorname{coker} d^{k-1} = K^{k}/B^{k}$。要证的四个箭头依次是：
- $Z^{k}/B^{k} \to K^{k}/B^{k}$：由含入 $Z^{k} \hookrightarrow K^{k}$ 诱导，单射（$Z^{k}$ 在 $K^{k}$ 里，商掉同一个 $B^{k}$）；
- $K^{k}/B^{k} \to Z^{k+1}$：由 $d^{k}$ 诱导（它把 $B^{k} = \operatorname{im} d^{k-1}$ 送到 $d^{k}d^{k-1} = 0$，故下降得良定义）。核正是「$d^{k}x = 0$ 的那些 $x + B^{k}$」＝ $Z^{k}/B^{k}$；
- $Z^{k+1} \to Z^{k+1}/B^{k+1} = H^{k+1}$：取商映射，满，核是 $B^{k+1} = \operatorname{im} d^{k}$ —— 正好是上一个箭头的像。

∎
