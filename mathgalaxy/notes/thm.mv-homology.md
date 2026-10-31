# Mayer–Vietoris（同调）　`thm.mv-homology`　·　说明
根 `../`

⚠️ **本图的证明是骨架**。结构与关键的一步：
① 记 $S_{*}(U) + S_{*}(V) \subseteq S_{*}(X)$ 为「落在 $U$ 里的」与「落在 $V$ 里的」奇异单纯形共同生成的子复形；有短正合列 $0 \to S_{*}(U \cap V) \to S_{*}(U) \oplus S_{*}(V) \to S_{*}(U) + S_{*}(V) \to 0$；
② 由 `thm.long-exact-pair` 的追图得一条长正合列；
③ **关键一步（本图不展开）**：包含 $S_{*}(U) + S_{*}(V) \hookrightarrow S_{*}(X)$ 诱导**同调同构**。理由是**小单纯形引理 / 重心重分**：给定奇异 $p$-单纯形 $\sigma : \Delta^{p} \to X$，$\{\sigma^{-1}(U), \sigma^{-1}(V)\}$ 是 $\Delta^{p}$ 的开覆盖；取 Lebesgue 数 $\delta$，反复重心重分直到每个小单纯形的直径 $< \delta$，则每个小单纯形整体落在 $U$ 或 $V$ 里——于是「重分后的链」落在 $S_{*}(U) + S_{*}(V)$ 里。重分链映射与包含互为链同伦逆；
④ 把 ②③ 接起来即得 MV。

> 续见 notes/thm.mv-homology.2.md
