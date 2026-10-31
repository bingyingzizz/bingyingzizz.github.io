# 可除群的例子　`ex.divisible-groups`　·　说明
根 `../`

**Prüfer 群的余极限**：沿「乘 $p$」的映射 $\mathbb{Z}/p^{k} \to \mathbb{Z}/p^{k+1}$ 取余极限。所以对每个元素都能无限次除以 $p$ —— 这正是可除性。

**为什么 $\mathbb{Q}/\mathbb{Z}$ 重要**：它是同调代数的标准对偶对象。$\operatorname{Hom}_{\mathbb{Z}}(-, \mathbb{Q}/\mathbb{Z})$ 是**特征标群**（Pontryagin 对偶的代数版），有限群上它就是 $(-)^{\vee}$；它同时是 `thm.mod-enough-injectives` 里把任意模嵌进内射模的那块砖。

📌 结构上：$\mathbb{Q}/\mathbb{Z} \cong \bigoplus_{p}\bigl(\mathbb{Z}[1/p]/\mathbb{Z}\bigr)$。一个元素只被**有限多个**素数整除，所以是直和而不是直积；$\mathbb{Q}/\mathbb{Z}$ 是挠群 —— 可见「可除」与「挠」并不冲突（冲突的是「可除」与「无挠且非零自由」）。

⚠️ $\mathbb{Q}$ 与 $\mathbb{Q}/\mathbb{Z}$ 虽然都内射，但一个无挠、一个全是挠，所以「内射」并不控制挠性。
