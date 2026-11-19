# imp.homotopy-equivalence-criterion
`imp.homotopy-equivalence-criterion` · 推出 · strong 边 · 根 `../`

`def.homotopy` 同伦 + `def.homotopy-category` 同伦范畴 → `prop.homotopy-equivalence-criterion` 同伦等价的判据

**证明。** 两条都是把定义展开（$\mathbf{K}(\mathcal{C})$ 的对象是复形、态射是**同伦类**）。
**1.** 若 $f$ 在 $\mathbf{K}(\mathcal{C})$ 中同构，取它的逆 $g$（一个复形态射），则 $gf$ 与 $1_{K}$ 在同伦范畴里相等，即 $gf \sim 1_{K}$ ✓；

$fg \sim 1_{L}$ 同理。

反之，若存在这样的 $g$，则 $[f]$ 与 $[g]$ 在 $\mathbf{K}(\mathcal{C})$ 中互为逆 ✓。
**2.** 「同伦平凡」的定义就是「与零对象同构」；而 $\mathbf{K}(\mathcal{C})$ 中的零对象是零复形，$K \to 0 \to K$ 的复合是 $0_{K}$。故存在同构 $\iff$ $1_{K} \sim 0_{K}$ ✓。∎
