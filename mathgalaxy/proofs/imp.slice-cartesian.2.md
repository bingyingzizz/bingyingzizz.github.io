# imp.slice-cartesian
`imp.slice-cartesian` · 推出 · strong 边 · 根 `../`

`def.slice-category` 切片范畴 + `def.fibered-product` 纤维积 / 纤维余积 + `lem.yoneda` 米田引理 + `def.presheaf-cat` 预层范畴 → `prop.slice-cartesian` 切片范畴是拉回

由 Yoneda 嵌入**全忠实**（$\operatorname{Hom}(h_{X},h_{X'}) \cong \operatorname{Hom}(X,X')$），这个对应在 Hom 上是双射 ✓。
- **函子性 / 等价**：对应在复合下保持（Yoneda 是函子）✓ 于是得到一个范畴等价，即原方块**笛卡尔** ✓。
- **特例**：取 $T = h_{X}$，得 $\mathcal{C}/X \simeq \widehat{\mathcal{C}}/h_{X}$ —— 在 $\mathcal{C}$ 里沿 $X$ 切片与在预层范畴里沿 $h_{X}$ 切片是同一件事 ✓。∎
