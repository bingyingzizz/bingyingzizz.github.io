# $\mathrm{Cond} \simeq \widehat{\mathbf{FCHaus}}$
`imp.cond-fchaus` · 推出 · strong 边 · 根 `../`

`prop.fchaus-sheaf` FCHaus 上层的判据 + `prop.fchaus-pretopology` FCHaus 上的预拓扑 + `def.free-presentation` 自由表示 → `thm.cond-equiv-fchaus` Cond 即 FCHaus 上的层

**这就是层的粘合。** 由 $\mathbf{CHaus}$ 里每个对象都有自由表示 $\beta S^{\mathrm{disc}} \twoheadrightarrow S$，取 $R := \beta S^{\mathrm{disc}} \times_{S} \beta S^{\mathrm{disc}}$ 与满射 $\beta R \to R$，则

$$X(S) \;=\; \varprojlim_{F \to S} X(F) \;\cong\; \ker\bigl(X(\beta S^{\mathrm{disc}}) \rightrightarrows X(\beta R)\bigr) \;=\; \{\, x : X(p_{1})(x) = X(p_{2})(x) \,\}$$

正是「相容的一族截面」。

> 续见 proofs/imp.cond-fchaus.3.md
