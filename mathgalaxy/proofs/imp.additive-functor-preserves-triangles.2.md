# imp.additive-functor-preserves-triangles
`imp.additive-functor-preserves-triangles` · 推出 · strong 边 · 根 `../`

`def.additive-functor` 加法函子 + `def.distinguished-triangle` 导出三角 → `prop.additive-functor-preserves-triangles` 加法函子保导出三角

于是 $F(M(f)) \cong M(Ff)$ ✓。
- **$F$ 保平移**：$F(K[1]) = F(K)[1]$（逐项作用与指标无关）✓。
- **$F$ 保同构与同伦类**：$F$ 是函子，把同构送到同构、把 $\mathbf{K}(\mathcal{C})$ 的态射送到 $\mathbf{K}(\mathcal{C}')$ 的态射 ✓。
于是任何导出三角（$\cong$ 某个映射锥三角）被 $F$ 送到 $\cong$ $F$ 的映射锥三角，仍是导出三角 ✓。
⚠️ 这里**必须**用加法性：非加法函子不保双积，$F(K^{n+1}\oplus L^{n}) \ne FK^{n+1}\oplus FL^{n}$，论证立刻断掉。∎
