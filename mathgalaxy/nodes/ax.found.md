# 正则公理　`ax.found`
正则公理 / 基础公理（Axiom of Foundation）
layer 0 · 公理 · ZFC 公理系统 · 集合论

每个非空集合都有「$\in$极小元」：

$$\forall A [ A \ne \emptyset \to \exists x ( x \in A \wedge  x \cap A = \emptyset ) ]$$
> 陈述续见 `nodes/ax.found.2.md`


## 它能推出什么 / 谁在用它
- ⇒ `thm.noself` 无自属集合
- ⇒ `thm.ordinal-trichotomy` 序数可比
- ⇒ `thm.wellorder-ordinal` 良序集的序型

refs: Kunen, Set Theory, I.9

## 说明
它排除了 $A \in A$ 这类循环集合，也排除了「集合的无穷下降」。

正则公理等价于「集合论宇宙 $V$ 是累积层级 $\bigcup_{\alpha} V_\alpha$」，这条公理让 $\in$归纳法成为合法的证明方法。
