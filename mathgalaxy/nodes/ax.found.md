# 正则公理　`ax.found`
正则公理 / 基础公理（Axiom of Foundation）
layer 0 · 公理 · ZFC 公理系统 · 集合论
[在星图里打开](../#n=ax.found)　·　[节点索引](../index.md)

每个非空集合都有「$\in$极小元」：

$$\forall A [ A \ne \emptyset \to \exists x ( x \in A \wedge  x \cap A = \emptyset ) ]$$

等价说法：$\in$ 是良基关系，不存在无穷递减链

$$x_0 \ni  x_1 \ni  x_2 \ni  \cdots$$

## 它能推出什么 / 谁在用它
- ⇒ [`thm.noself`](../nodes/thm.noself.md) 无自属集合
- ⇒ [`thm.ordinal-trichotomy`](../nodes/thm.ordinal-trichotomy.md) 序数可比

refs: Kunen, Set Theory, I.9

- …另有出边，续页见 [nodes/ax.found.2.md](./ax.found.2.md)

## 说明
它排除了 $A \in A$ 这类循环集合，也排除了「集合的无穷下降」。

正则公理等价于「集合论宇宙 $V$ 是累积层级 $\bigcup_{\alpha} V_\alpha$」，这条公理让 $\in$归纳法成为合法的证明方法。

引用：`ax.found`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
