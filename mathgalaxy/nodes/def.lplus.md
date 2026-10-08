# L⁺　`def.lplus`
$L^{+}$：非负可测函数全体
layer 14 · 定义 · 积分 · 分析学

固定测度空间 $(X, \mathcal{M}, \mu )$。记
> 陈述续见 `nodes/def.lplus.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.measurable-function` 可测函数：用到了定义 可测函数　proofs/def-dep.measurable-fn-lplus.md
- `def.measure` 测度：用到了定义 测度　proofs/def-dep.measure-lplus.md

## 它能推出什么 / 谁在用它
- 被 `thm.mct` 单调收敛定理 用
- 被 `def.integral-complex` 复函数的积分 用
- 被 `def.integrable` 可积 / L¹ 用
- 被 `thm.dct` 控制收敛定理 用
- 被 `cor.fatou` Fatou 的推论 用
- 被 `prop.finite-integral-consequences` 积分有限的后果 用

refs: Folland, Real Analysis, §2.2

- …另有出边，续页见 `nodes/def.lplus.3.md`

## 说明
⚠ 取值允许是 $\infty$，这是刻意的：先把积分对 $[0, +\infty ]$ 值的函数定义好，收敛定理（sup / 极限）在整个 $L^{+}$ 里封闭，不必反复讨论「积分是不是有限」。

「可积」（积分有限）是之后单独加的条件，见 $L^{1}$ 的定义。
