# 本质满　`def.essentially-surjective`
本质满函子（Essentially Surjective）
layer 9 · 定义 · 函子与自然变换 · 范畴论

函子 $F : \mathcal{C} \to \mathcal{C}'$ 叫**本质满**，如果对 $\mathcal{C}'$ 的每个对象 $X'$，都存在 $\mathcal{C}$ 中的对象 $X$ 使
> 陈述续见 `nodes/def.essentially-surjective.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.functor` 函子：用到了定义 函子　proofs/def-dep.functor-eso.md

## 它能推出什么 / 谁在用它
- ⇒ `def.cat-equivalence` 范畴等价

## 说明
注意是 $\cong$ 而不是 $=$：要求「$F$ 的像**同构于**每个对象」，而不是「$F$ 的像**就是**全体对象」。差这一个同构，正是范畴等价比范畴同构宽松的地方 —— 而恰恰是这一点让它有用，因为绝大多数有趣的等价都不是同构。
