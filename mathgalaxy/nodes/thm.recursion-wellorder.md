# 超限递归　`thm.recursion-wellorder`
良序集上的递归定理（含超限归纳）
layer 7 · 定理 · 序数与超限 · 集合论
[在星图里打开](../#n=thm.recursion-wellorder)　·　[节点索引](../index.md)

设 $(W, \preceq )$ 是**良序集**，$G$ 是任给的函数（可以取在一整个真类上）。记 $W_{< w} = \{ v \in W : v \prec w \}$。则存在**唯一**的函数 $F$ 定义在 $W$ 上，使

$$F(w) = G\big( F \upharpoonright W_{< w} \big), \qquad \forall w \in W$$

也就是说：**每一步只依赖前面已经取到的值**。

**推论（超限归纳）**：若 $S \subseteq W$ 且 $\forall w \in W\; ( W_{< w} \subseteq S \to w \in S )$，则 $S = W$。
> 陈述续见 [nodes/thm.recursion-wellorder.2.md](./thm.recursion-wellorder.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.recursion-wellorder.3.md](./thm.recursion-wellorder.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.recursion-wellorder.4.md](./thm.recursion-wellorder.4.md)

refs: Kunen, Set Theory, I.9；Jech, Set Theory, 2.3

> 说明见 `notes/thm.recursion-wellorder.md`

引用：`thm.recursion-wellorder`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
