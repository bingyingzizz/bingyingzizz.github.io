# 替换公理模式　`ax.repl`
替换公理模式（Axiom Schema of Replacement）
layer 3 · 公理 · ZFC 公理系统 · 集合论

若一个公式定义了「函数关系」，则任一集合的像仍是集合。对每个公式 $\varphi (x, y, p)$（其中 $B$ 不出现）：
> 陈述续见 `nodes/ax.repl.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.formula` 公式：用到了定义 公式　proofs/def-link.formula-repl.md
- `def.substitution` 代入：用到了定义 代入　proofs/def-link.substitution-repl.md

## 它能推出什么 / 谁在用它
- ⇒ `ax.sep` 分离公理模式
- ⇒ `thm.wellorder-ordinal` 良序集的序型

refs: Kunen, Set Theory, I.6

## 说明
替换公理模式是 $Z$ 与 ZF 的分水岭。由它（加上任取一个集合 $A$）可以推出分离公理模式。
