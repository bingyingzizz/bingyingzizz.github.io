# 无穷公理　`ax.inf`
无穷公理
layer 0 · 公理 · ZFC 公理系统 · 集合论
[在星图里打开](../#n=ax.inf)　·　[节点索引](../index.md)

存在一个「归纳集」——含有 $\emptyset$ 且对后继封闭的集合：

$$\exists I [ \emptyset \in I \wedge  \forall x ( x \in I \to x \cup \{ x \} \in I ) ]$$

$\emptyset \in I$ 这一项**不能省**：$I = \omega \setminus \{0\}$ 非空、对后继封闭（$x \ne 0 \implies S(x) \ne 0$），却不含 $\emptyset$ —— 「非空 + 对后继封闭」推不出 $\emptyset \in I$。（$\emptyset$ 是原始对象，见「空集」。）
这条公理宣告了无穷集合的存在，是从中构造自然数集 $\omega$ 的唯一来源。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.omega`](../nodes/thm.omega.md) 自然数集存在

refs: Kunen, Set Theory, I.5

> 说明见 `notes/ax.inf.md`

引用：`ax.inf`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
