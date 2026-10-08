# 万有关系　`def.universal-colimit`
万有余极限、万有满态射、不交余积
layer 13 · 定义 · 层与拓扑 · 范畴论

1. 余极限 $X = \varinjlim_{i} X_{i}$ 叫**万有的**，如果对任意 $X \to Y$ 与 $Y' \to Y$，
> 陈述续见 `nodes/def.universal-colimit.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.fibered-product` 纤维积 / 纤维余积：用到了定义 纤维积 / 纤维余积　proofs/def-dep.fibered-universal.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.site-properties` site 的层范畴的好性质
- 被 `prop.site-properties` site 的层范畴的好性质 用
- 被 `prop.disjoint-universal` 不交万有余积与次标准拓扑 用
- 被 `def.pretopos` 预拓扑斯 用

## 说明
「万有」= **拉回之后还在**：不管把整个图沿什么映射拉回去，性质都保持。这三条是把「集合里那些显然的好性质」翻译成范畴语言的样板 —— 它们在 $\mathbf{Set}$ 里不出问题，但换一个范畴就未必，所以必须写下来。
