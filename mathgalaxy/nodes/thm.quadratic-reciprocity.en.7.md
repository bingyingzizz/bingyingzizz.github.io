# law of quadratic reciprocity　`thm.quadratic-reciprocity`
English entry · root `../`
[in graph](../#n=thm.quadratic-reciprocity)　·　[Chinese page (authoritative)](./thm.quadratic-reciprocity.md)

**Step 1. Gauss's lemma.** Set $\varepsilon_{x} = 1$ when $r_{x} < p/2$, or $-1$ when $r_{x} > p/2$. Set $s_{x} = r_{x}$ in the former case and $s_{x} = p - r_{x}$ in the latter. Then $1 \le s_{x} \le P$. We claim that $x \mapsto s_{x}$ is a permutation of $\{1, \ldots, P\}$. If $s_{x} = s_{y}$, then $r_{x} \equiv \pm r_{y} \pmod p$, that is, $qx \equiv \pm qy \pmod p$. Since $q$ is invertible modulo $p$, we have $x \equiv \pm y \pmod p$. But $1 \le x, y \le P$ and $p$ is odd, so $x \equiv -y$ would imply $x + y = p$, contradicting $x + y \le 2P = p - 1$. Hence $x = y$ ✓.

> continued in nodes/thm.quadratic-reciprocity.en.8.md
