# 完全正则空间　`def.completely-regular-space`　·　续页（第 2 页）
[在星图里打开](../#n=def.completely-regular-space)　·　第 1 页 [nodes/def.completely-regular-space.md](./def.completely-regular-space.md)

## 陈述（续）
拓扑空间 $X$ 叫**完全正则**（completely regular，也叫 **Tychonoff 空间**这个术语的弱版），若对任意闭集 $F$ 与任意 $x \notin F$，存在连续函数 $f : 
X \to [0, 1]$ 使
$$f(x) = 0, \qquad f|_{F} \equiv 1 .$$

若再要求 $T_{1}$，就称 $X$ 是 **$T_{3.5}$ 空间**（**Tychonoff 空间**）。
**等价说法**：$X$ 能嵌入某个方体 $[0,1]^{I}$（即「有足够多的连续函数」）。
**链的位置**：$T_{4} \implies T_{3.5} \implies T_{3} \implies T_{2}$ —— 唯一的非平凡一步是 $T_{4} \implies T_{3.5}$（用 Urysohn 引理 `lem.urysohn`，注意它要的
是**正规**，不是正则）。

> 续见 [nodes/def.completely-regular-space.3.md](./def.completely-regular-space.3.md)
