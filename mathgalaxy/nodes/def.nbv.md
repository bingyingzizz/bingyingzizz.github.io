# NBV　`def.nbv`
NBV：右连续且 $F(-\infty) = 0$ 的有界变差函数
layer 16 · 定义 · 有界变差与绝对连续 · 分析学

$$NBV := \{ F \in BV : F\text{ 右连续},\text{ 且} F(-\infty) = 0 \}$$

## 为什么成立（入边，证明在 proofs/）
- `def.bounded-variation` 有界变差 BV：用到了定义 有界变差 BV　proofs/def-dep.bv-nbv.md
- `def.borel` Borel σ-代数：用到了定义 Borel σ-代数　proofs/def-dep.borel-nbv.md

## 它能推出什么 / 谁在用它
- 被 `lem.nbv-variation` 全变差的 NBV 性质 用
- 被 `cor.integral-is-ac-nbv` 积出来的函数是 AC · NBV 用
- 被 `prop.nbv-derivative` NBV 函数的导数与测度的关系 用

refs: Folland, Real Analysis, Theorem 3.29

> 说明见 `notes/def.nbv.md`
