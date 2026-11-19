# imp.image-kernel-cokernel
`imp.image-kernel-cokernel` · 推出 · strong 边 · 根 `../`

`def.image` 像 / 余像 + `def.kernel-cokernel` 核与余核 + `def.abelian-category` 阿贝尔范畴 → `prop.image-kernel-cokernel` 像就是余核的核

**证明（两条基本事实：阿贝尔范畴里每个单态射都是它余核的核、每个满态射都是它核的余核）。**
记 $m := \ker\bigl(N \to \operatorname{coker} f\bigr)$，它按定义是单态射 ✓。
**（一）$f$ 穿过 $m$。** 因为 $(\operatorname{coker} f) \circ f = 0$ ✓，而 $m$ 正是这个映射的核，所以 $f$ 唯一地分解为 $f = m \circ e$ ✓。
**（二）$m$ 最小。** 设 $f = m' \circ e'$ 是任意分解且 $m'$ 是单态射。

> 续见 proofs/imp.image-kernel-cokernel.2.md
