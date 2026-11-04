# profinite 整数 ℤ̂　`def.profinite-integers`　·　说明
根 `../`

**它装的是什么**：$\hat{\mathbb{Z}}$ 的元素是相容序列 $(a_{n})_{n \ge 1}$（$a_{n} \in \mathbb{Z}/n$、$a_{m} \equiv a_{n} \pmod n$）。把整数 $k$ 送成常数序列 $(k \bmod n)_{n}$ 是一个紧嵌入 $\mathbb{Z} \hookrightarrow \hat{\mathbb{Z}}$，像稠密但**不**是全体（`def.profinite` 里「稠密但不满」的标准例子）。

⭐ **CRT 把它拆成素数方向**：$\hat{\mathbb{Z}} \cong \prod_{p} \mathbb{Z}_{p}$（$\mathbb{Z}_{p}$ 是 $p$-进整数）。所以「数论的素数分解」在拓扑侧变成了「紧全不连通空间拆成不可再分的因子」—— 这是数论与拓扑之间**真存在**的那道桥。

📌 **为什么它在凝聚态里重要**：$\hat{\mathbb{Z}}$ 是所有 profinite 空间的「原型」，$\mathbb{Z}[\hat{\mathbb{Z}}]$ 的投射性（`thm.gleason` / `lem.stonean-projective` 那一支）就是从这里看出来的。

> 续见 notes/def.profinite-integers.2.md
