# 本性上界与 L^∞　`def.essential-sup`
本性上界 $\|f\|_\infty$ 与空间 $L^\infty$
layer 15 · 定义 · L^p 空间 · 分析学

定义

$$\|f\|_\infty := \inf \{\, a \ge 0 : \mu(\{\, |f| > a \,\}) = 0 \,\}$$

（把 $f$ 在零集上的取值完全忽略之后，它的「真正」上界。）这个下确界**是可以取到的**：对 $a = \|f\|_\infty$ 本身就有 $\mu(\{|f| > a\}) = 0$。
> 陈述续见 `nodes/def.essential-sup.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.real` 实数系 ℝ：用到了定义 实数系 ℝ　proofs/dep.real-lp.md
- `def.measure` 测度：用到了定义 测度　proofs/def-dep.measure-essential-sup.md
- `def.null-set` 零集与完备：用到了定义 零集与完备　proofs/def-dep.null-set-essential-sup.md
- `def.measurable-function` 可测函数：用到了定义 可测函数　proofs/def-dep.measurable-fn-essential-sup.md

## 它能推出什么 / 谁在用它
- 被 `thm.linf-properties` L^∞ 的性质 用
- 被 `prop.lp-inter-lr-in-lq` L^p ∩ L^r ⊆ L^q 用

- …另有出边，续页见 `nodes/def.essential-sup.3.md`

refs: Folland, Real Analysis, §6.1

> 说明见 `notes/def.essential-sup.md`
