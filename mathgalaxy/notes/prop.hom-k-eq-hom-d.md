# Hom 在同伦范畴与导出范畴里一样　`prop.hom-k-eq-hom-d`　·　说明
根 `../`

**要用的那条引理。** 若 $s : K'^{\bullet} \to K^{\bullet}$ 是拟同构、$I^{\bullet} \in C^{+}(\mathcal{I})$，则「右乘 $s$」

$$\operatorname{Hom}_{\mathbf{K}}(K^{\bullet}, I^{\bullet}) \xrightarrow{\;\circ s\;} \operatorname{Hom}_{\mathbf{K}}(K'^{\bullet}, I^{\bullet})$$

是**双射**。证：把 $s$ 补成三角 $K'^{\bullet} \to K^{\bullet} \to M^{\bullet} \to K'^{\bullet}[1]$（$M^{\bullet}$ 零调），对共调函子 $\operatorname{Hom}_{\mathbf{K}}(-, I^{\bullet})$ 取长正合列得
$$\operatorname{Hom}_{\mathbf{K}}(M^{\bullet}[-1], I^{\bullet}) \to \operatorname{Hom}_{\mathbf{K}}(K^{\bullet}, I^{\bullet}) \xrightarrow{\;\circ s\;} \operatorname{Hom}_{\mathbf{K}}(K'^{\bullet}, I^{\bullet}) \to \operatorname{Hom}_{\mathbf{K}}(M^{\bullet}, I^{\bullet}),$$
再用「零调的源到上有界内射复形的态射同伦于零」（逐项提升造同伦 $s^{n+1} \circ d^{n} = f^{n} - d^{n-1}\circ s^{n}$）把两头杀掉。

> 续见 notes/prop.hom-k-eq-hom-d.2.md
