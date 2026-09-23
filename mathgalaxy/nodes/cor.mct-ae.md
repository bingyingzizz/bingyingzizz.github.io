# MCT（a.e. 版本）　`cor.mct-ae`
推论：单调收敛定理的几乎处处版本
layer 16 · 推论 · 积分 · 分析学

设 $\{f_n\} \subseteq L^+$，$f \in L^+$。若对**几乎处处的**
> 陈述续见 `nodes/cor.mct-ae.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.null-set` 零集与完备：用到了定义 零集与完备　proofs/def-link.nullset-ae-mct.md
- `def.ae` 几乎处处：用到了定义 几乎处处　proofs/def-link.ae-mct-ae.md

refs: Folland, Real Analysis, §2.2；Rudin, Real and Complex Analysis, Ch. 1

## 说明
把例外集 $N$（$\mu (N) = 0$）上的值全部改掉不影响任何一边的积分：左边用「积分为零 $\iff$ 几乎处处为零」，右边用「零集不改变简单函数的积分」。所以收敛只在 a.e. 上成立就够。
