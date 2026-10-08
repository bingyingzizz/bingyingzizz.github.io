# 加法 / 阿贝尔范畴　`def.abelian-category`
加法范畴与阿贝尔范畴（Additive / Abelian Category）
layer 16 · 定义 · 同调代数 · 范畴论

- **预加法范畴**（$\mathbf{Ab}$-范畴）是每个 $\operatorname{Hom}$ 集都带有阿贝尔群结构、且复合双线性的范畴；
- **零对象**是 $\operatorname{End}(M) = 1$（即 $1_{M} = 0_{M}$）的对象；对象 $M$ 是 $M_{1}, M_{2}$ 的**直和** $M = M_{1} \oplus M_{2}$，如果存在 $p_{k} : M \to M_{k}$、$i_{k} : M_{k} \to M$ 使 $p_{1} i_{1} = 1$、$p_{2} i_{2} = 1$、$i_{1} p_{1} + i_{2} p_{2} = 1_{M}$；
- **加法范畴**是有零对象与所有直和的预加法范畴（等价
> 陈述续见 `nodes/def.abelian-category.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.fibered-product` 纤维积 / 纤维余积：用到了定义 纤维积 / 纤维余积　proofs/def-dep.fibered-abelian.md
- `def.equalizer` 等化子 / 余等化子：用到了定义 等化子 / 余等化子　proofs/def-dep.equalizer-abelian.md

> 说明见 `notes/def.abelian-category.md`

- …另有入边，续页见 `nodes/def.abelian-category.3.md`

## 它能推出什么 / 谁在用它
- …另有出边，续页见 `nodes/def.abelian-category.4.md`
