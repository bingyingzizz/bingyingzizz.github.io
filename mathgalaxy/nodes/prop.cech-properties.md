# Čech 函子的性质　`prop.cech-properties`
Čech 函子的三条性质
layer 17 · 命题 · 层与拓扑 · 范畴论

1. $\widehat{H}$ **左正合**（保有限极限）；
2. $T$ 是预层 $\implies$ $\widehat{H}(T)$ **分离**；$T$ 分离 $\implies$ $\widehat{H}(T)$ 是**层**；
3. $T$ 是分离的（层）$\iff$ $T \to \widehat
> 陈述续见 `nodes/prop.cech-properties.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.cech-functor` Čech 函子：用到了定义 Čech 函子　proofs/def-dep.cech-properties.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.sheafification` 层化

## 说明
1 的理由很短：$\operatorname{Hom}(-, T)$ 保极限，而**滤过余极限左正合**。3 说明「分离」与「层」的差别就是「$T$ 在 $\widehat{H}$ 里是不是已经到顶了」—— 于是「做两次 $\widehat{H}$」这件事有了明确的意义。
