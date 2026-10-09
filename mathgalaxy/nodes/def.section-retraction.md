# 截面与收缩　`def.section-retraction`
截面与收缩（Section / Retraction）
layer 8 · 定义 · 范畴与图 · 范畴论

设 $f : X \to Y$ 是范畴里的一条态射。

- $f$ 的**截面**（section）是态射 $g : Y \to X$，使

$$f \circ g = 1_Y$$

- $f$ 的**收缩**（retraction）是态射 $g : Y \to X$，使
> 陈述续见 `nodes/def.section-retraction.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.category` 范畴：用到了定义 范畴　proofs/def-dep.category-section.md

## 它能推出什么 / 谁在用它
- 被 `def.localization` 局部化 用
- 被 `prop.iso-unique-section` 同构的截面与收缩唯一 用

## 说明
两条等式方向相反：截面是「先 $g$ 再 $f$，回到 $Y$ 原地」，收缩是「先 $f$ 再 $g$，回到 $X$ 原地」。换句话说，截面是 $f$ 的右逆，收缩是 $f$ 的左逆 —— 名字不同是因为复合的写法与映射的写法反着来。
