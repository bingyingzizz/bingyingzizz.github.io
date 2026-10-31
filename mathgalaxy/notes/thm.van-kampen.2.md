# van Kampen 定理　`thm.van-kampen`　·　说明
根 `../`

⚠️ **本证明是骨架，不是逐行证明**（如实标注）。结构是：
① 用 Lebesgue 数把任意闭道路 $\alpha$ 切成小段，每段落在 $U$ 或 $V$ 里；
② 由「小段所在的开片里没有洞」，把每段替换成落在 $U$ 或 $V$ 中的道路，得 $\alpha \simeq_{p}$ 一串交替的 $U$-段与 $V$-段；
③ 这个分解定义出满同态 $\Phi : \pi_{1}(U) * \pi_{1}(V) \twoheadrightarrow \pi_{1}(X)$，且 $N \subseteq \ker\Phi$；
④ 反向：给一个 $\Phi(\text{字}) = 1$ 的同伦，再用同样的切细手法把同伦也切成小块，证明该字在 $N$ 里。这一步是**最长的**，本图没有逐条写。

💡 一句记法：**交叠是「胶水」，$\pi_{1}$ 沿着胶水做余极限**。所谓 amalgamated product 就是群范畴里的推出（pushout）。
