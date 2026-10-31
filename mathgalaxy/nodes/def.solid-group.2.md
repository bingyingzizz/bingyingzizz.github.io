# 固态阿贝尔群　`def.solid-group`　·　续页（第 2 页）
[在星图里打开](../#n=def.solid-group)　·　第 1 页 [nodes/def.solid-group.md](./def.solid-group.md)

## 陈述（续）
$$Z[S]^{\blacksquare} := \varprojlim_i \mathbb{Z}[S_i].$$

有自然映射 $S = \varprojlim_i S_i \to \varprojlim_i \mathbb{Z}[S_i]$，从而 $\mathbb{Z}[S] \to Z[S]^{\blacksquare}$。

**(ii) 固态群。** 凝聚态阿贝尔群 $A$ 叫**固态的**，当且仅当：对每个 profinite 集 $S$ 与每个映射 $f : S \to A$，存在**唯一**的映射 $\tilde f : Z[S]^{\blacksquare} \to A$ 使
$$S \longrightarrow Z[S]^{\blacksquare} \xrightarrow{\ \tilde f\ } A$$

等于 $f$。

**(iii) 固态复形。** 复形 $C \in D(\operatorname{Cond}(\mathbf{Ab}))$ 叫**固态的**，当且仅当对每个 profinite 集 $S$，自然映射

$$\operatorname{RHom}(Z[S]^{\blacksquare}, C) \longrightarrow \operatorname{RHom}(\mathbb{Z}[S], C) = R\Gamma(S, C)$$

是同构。

> 续见 [nodes/def.solid-group.3.md](./def.solid-group.3.md)
