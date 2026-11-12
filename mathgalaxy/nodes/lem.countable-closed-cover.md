# 闭覆盖的内点　`lem.countable-closed-cover`
可数个闭集覆盖 $X$ $\implies$ 内点之并稠密
layer 8 · 引理 · Baire 纲与三大定理 · 泛函分析
[在星图里打开](../#n=lem.countable-closed-cover)　·　[节点索引](../index.md)

设 $X$ 是 Baire 空间，$F_n \subseteq X$ 闭，且 $X = \bigcup_n F_n$。则 $\bigcup_n \operatorname{int} F_n$ 在 $X$ 中**稠密**。特别地，若 $X \ne \emptyset$，则至少有一个 $F_n$ 有非空内部（空空间
> 陈述续见 [nodes/lem.countable-closed-cover.2.md](./lem.countable-closed-cover.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/lem.countable-closed-cover.3.md](./lem.countable-closed-cover.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/lem.countable-closed-cover.5.md](./lem.countable-closed-cover.5.md)

refs: Rudin, Functional Analysis, Ch. 2（Baire 纲与三大定理）

## 说明
text=**这是 Baire 纲定理的「开集版」**：闭覆盖中那些有内部的成员，其内部之并稠密。完整证明（在非空开集上用 Baire 性）见边 `imp.countable-closed-cover-proof`。

引用：`lem.countable-closed-cover`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
