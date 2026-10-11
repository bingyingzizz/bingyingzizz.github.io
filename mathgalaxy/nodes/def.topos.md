# 拓扑斯　`def.topos`
拓扑斯（Topos）
layer 16 · 定义 · 拓扑斯 · 范畴论

范畴 $\mathcal{T}$ 叫**拓扑斯**，如果

1. 存在一个**小**的生成元集；
2. 有限极限存在；
3. 余积存在，并且是不交的、万有的（等价地说：所有余极限存在）；
4. 等价关系是有效的且万有的。

## 为什么成立（入边，证明在 proofs/）
- `def.pretopos` 预拓扑斯：用到了定义 预拓扑斯　proofs/def-dep.pretopos-topos.md
- `def.generator` 生成元集：用到了定义 生成元集　proofs/def-dep.generator-topos.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.giraud` Giraud 定理
- 被 `thm.giraud` Giraud 定理 用
- 被 `prop.topos-covering-epi` 拓扑斯中覆盖即余积满射 用
- 被 `thm.topos-abelian-grothendieck` 拓扑斯上的阿贝尔群是 Grothendieck 范畴 用
- 被 `def.topos-morphism` 拓扑斯的态射 用
- 被 `def.internal-hom` 内 Hom 用
- 被 `thm.breen-deligne` Breen–Deligne 分解 用

> 说明见 `notes/def.topos.md`
