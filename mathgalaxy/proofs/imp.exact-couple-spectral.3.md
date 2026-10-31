# 导出偶的递推 $\implies$ 谱序列及其微分规律
`imp.exact-couple-spectral` · 推出 · strong 边 · 根 `../`

`def.exact-couple` 正合偶 → `thm.exact-couple-spectral` 正合偶给出谱序列

这正是谱序列定义里 $d_{r} : E^{p,q}_{r} \to E^{p+r,\, q-r+1}_{r}$ 的那条规律（$q-(r-1) = q-r+1$）。

**第五步：极限项。** $D_{r+1} = i_{r}(D_{r}) \subseteq D_{r}$ 递降，故 $D_{\infty} := \bigcap_{r} D_{r}$ 有定义。稳定条件下，$E_{r}$ 在每格上稳定于某个 $E_{\infty}$，而「$i$ 的像取尽、$k$ 的像除掉之后剩下的正是 $j$ 那一步的商」逐格核对给出 $E_{\infty}^{p,q} = D_{\infty}^{p,q}/D_{\infty}^{p+1,q-1}$。∎

> 续见 proofs/imp.exact-couple-spectral.4.md
